import { NewUser } from './../../../shared/models/new-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;
const ENDPOINT = "users/signup"

@Injectable({
    providedIn: 'root'
})
export class NewUserService {

constructor(private httpClient: HttpClient) { }

signUp(newUser: NewUser): Observable<string>{
    return this.httpClient.post<string>(`${API}/${ENDPOINT}`, newUser);
}

}
