import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Status} from 'tslint/lib/runner';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  api = 'http://localhost:8080/auth';
  constructor(private http: HttpClient, private router: Router) { }
  // tslint:disable-next-line:typedef
  register(email: string, name: string, surname: string, password: string, repeatPassword: string)  {

      this.http.post(this.api + '/signup', {email, name, surname, password})
        .subscribe((resp: Status) => {
          this.router.navigate(['profile']);
        });

  }
}
