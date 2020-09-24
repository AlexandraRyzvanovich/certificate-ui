import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {Login} from '../../login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://localhost:8080/auth';
  token;
  constructor(private http: HttpClient, private router: Router) { }
  // tslint:disable-next-line:typedef
  login(email: string, password: string): void{
    this.http.post(this.api + '/login', {username: email, password})
      .subscribe((resp: any) => {

        /*this.router.navigate(['profile']);*/
        localStorage.setItem('auth_token', resp.token);

      });
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead


      return of(result as T);
    };
  }

public get logIn(): boolean {
  return (localStorage.getItem('token') !== null);
}
}
