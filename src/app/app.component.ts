import { TokenService } from './authentication/services/token.service';
import { UserInfo } from 'src/app/shared/models/user-info';
import { UserService } from './authentication/services/user.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  hasAnyToken : Observable<UserInfo> = this.userService.getUser();

  constructor(private userService: UserService) {}


}
