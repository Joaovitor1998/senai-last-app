import { NewUser } from './../../shared/models/new-user';
import { Router } from '@angular/router';
import { NewUserService } from './services/newUser.service';
import { UserExistsService } from './services/user-exists.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { checkErrorExists } from 'src/app/shared/utils/inputError.verifier';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  form!: FormGroup;
  invalidFormMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private userExistsService: UserExistsService,
    private newUserService: NewUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  goToLoginPage(): void {
    this.router.navigateByUrl("login");
  }

  hasError(errorName: string, controlName: string[]): boolean {
    return checkErrorExists(this.form, errorName, controlName);
  }

  onSubmit(): void {
    if( this.form.valid ) {
      // SUBMIT FORM
      this.newUserService.signUp(this.form.value as NewUser).subscribe(
        next => {
          this.router.navigateByUrl("login");
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.invalidFormMessage = "Dados inválidos. Tente novamente!";
    }
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required, [this.userExistsService.isUserTaken("username")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email], [this.userExistsService.isUserTaken("email")]]
    });
  }

}
