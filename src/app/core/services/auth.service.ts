import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtTokenService} from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://localhost:8080/auth';
  role: string;

  constructor(private tokenService: JwtTokenService,
              private http: HttpClient, private router: Router) {}

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

  // tslint:disable-next-line:typedef
  getRole(): string {
    const token: string = this.getToken();
    if (token) {
      const decodedToken = this.tokenService.decodeToken(token);
      return this.role = decodedToken.roles.toString();
    }
  }
  isAuthenticated(): boolean {
    const token: string = this.getToken();
    if (token) {
      return true;
    }
  }
  logout(): void{
    this.http.get(this.api + '/logout').subscribe();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }
}
