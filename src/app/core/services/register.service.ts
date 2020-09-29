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
  register(body: any) {
    console.log(body);
    return this.http.post(this.api + '/signup', body).subscribe(resp => {
      this.router.navigate(['/search-certificates']);
    });
  }
}
