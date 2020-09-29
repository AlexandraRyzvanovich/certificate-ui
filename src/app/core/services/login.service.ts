import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://localhost:8080/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // tslint:disable-next-line:typedef
  login(username: string, password: string): void{
    const body = { username, password };
    this.http.post(this.api + '/login', body).subscribe((resp: any) => {

      localStorage.setItem('token', resp.token);
      localStorage.setItem('id', resp.id);

      this.router.navigate(['/search-certificates']);
    });
  }

  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('token');
  }
}