import { first, map, switchMap } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;
const ENDPOINT = "users/exists";

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private HttpClient: HttpClient) { }

  checkIfUserExists(user: string) {
    return this.HttpClient.get(`${API}/${ENDPOINT}/${user}`);
  }

  isUserTaken(errorName: string) {

    return (control: AbstractControl) => {

      return control.valueChanges.pipe(

        switchMap((username: string) =>
          this.checkIfUserExists(username)),

        map(exists => exists ? { [errorName + 'Exists']: true } : null),

        first()
      );
    }
  }

}
