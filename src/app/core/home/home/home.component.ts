import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeImage : string = "../../../assets/images/ranger.png";

  user$ = this.userService.getUser();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
