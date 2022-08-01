import { UserService } from './../../../authentication/services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  canShowUserDetails !: boolean;
  user$ = this.userService.getUser();

  @Output() showMenuContentEmitter = new EventEmitter<boolean>();

  constructor(private userService: UserService) { 
    this.canShowUserDetails = false;
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout();
  }

  showUserDetails(): void {
    this.canShowUserDetails = !this.canShowUserDetails;
  }

  showMenuContent(): void {
    this.showMenuContentEmitter.emit(true);
  }

}
