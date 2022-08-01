import { UserInfo } from './../../shared/models/user-info';
import { UserCredentials } from './../../shared/models/user-credentials';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

const API = environment.apiUrl;
const ENDPOINT = "users/signin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  authenticate(credentials : UserCredentials) : Observable<HttpResponse<UserInfo>> {

    return this.httpClient.post<UserInfo>(
      `${API}/${ENDPOINT}`,
      credentials,
      {observe: 'response'}
    ).pipe(

      tap( response => {
        const token = response.headers.get('x-access-token') ?? '';
        this.userService.login(token);
      })

    );

  }
}
