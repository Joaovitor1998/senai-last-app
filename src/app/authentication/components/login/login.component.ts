import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/shared/models/user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  loginImage : string = "../../../../assets/images/ranger.png";
  formImage : string = "../../../../assets/images/ford.png";

  loginError : string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() : void {
    const isFormValid : boolean = this.loginForm.valid;
    if( isFormValid ) {
      const credentials : UserCredentials = this.loginForm.value;
      this.authenticate(credentials);
    }
  }

  private authenticate(credentials : UserCredentials) : void {
    this.authService.authenticate(credentials).subscribe(
      next => this.router.navigateByUrl("/"),
      error => this.loginError = "Usuário/Email ou senha inválidas! Por favor, tente novamente!"
    )
  }

  private buildForm() : void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]
    });
  }

}
