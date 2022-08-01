import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from 'src/app/shared/models/user-info';
import jwt_decode from 'jwt-decode';

const NO_USER: UserInfo = {} as UserInfo;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject: BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(NO_USER);

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
    this.checkForExistentToken();
  }

  login(token: string) {
    this.tokenService.setToken(token);
    const user = this.decodeJwt();
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(NO_USER);
    this.router.navigateByUrl("/login");
  }

  getPermissions(): string[] {
    const user = this.decodeJwt();
    return user.roles;
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }  

  getUser(): Observable<UserInfo> {
    return this.userSubject.asObservable();
  }

  private decodeJwt(): UserInfo {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as UserInfo;
    return user;
  }

  private checkForExistentToken(): void {
    if( this.isLoggedIn() ){
      const user = this.decodeJwt();
      this.userSubject.next(user);
    }
  }
}
