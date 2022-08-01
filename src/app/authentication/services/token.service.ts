import { Injectable } from '@angular/core';

const TOKEN_KEY = "token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() : string {
    return localStorage.getItem(TOKEN_KEY) ?? "";
  }

  setToken(token: string) : void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken() : void {
    localStorage.removeItem(TOKEN_KEY);
  }

  hasToken() : boolean {
    return !!this.getToken();
  }

}
