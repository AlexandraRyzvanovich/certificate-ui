import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Login} from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://localhost:8080/auth';
  token;
  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string) {
    this.http.post(this.api + '/login', {username: email, password: password})
      .subscribe((resp: any) => {

        /*this.router.navigate(['profile']);*/
        localStorage.setItem('auth_token', resp.token);

      });
  }

public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
}
}
