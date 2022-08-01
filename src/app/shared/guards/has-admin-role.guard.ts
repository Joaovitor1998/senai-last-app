import { UserInfo } from './../models/user-info';
import { TokenService } from './../../authentication/services/token.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class HasAdminRoleGuard implements CanLoad {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token: string = this.tokenService.getToken();
    const user: UserInfo = jwt_decode(token) as UserInfo;

    if (user.roles.includes("ADMIN")) {
      return true;
    }

    this.router.navigateByUrl("");
    return false;

  }
}
