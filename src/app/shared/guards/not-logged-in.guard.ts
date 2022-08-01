import { UserService } from './../../authentication/services/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuard implements CanLoad {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn: boolean = this.userService.isLoggedIn();

    if( !isLoggedIn ) {
      return true;
    }
    
    this.router.navigateByUrl("/");
    return false;
  }
}
