import { TokenService } from './services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("INSIDE INTERCEPTOR");

    const hasToken = this.tokenService.hasToken();
    if( hasToken ){
      const token = this.tokenService.getToken();
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      });
    }

    console.log(request);

    return next.handle(request);
  }
}
