import {Injectable, Injector} from '@angular/core';
// tslint:disable-next-line:import-spacing
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest}
from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../services/login.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private loginService: LoginService;

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loginService = this.injector.get(LoginService);
    const token: string = this.loginService.getToken();
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer_${token != null ? token : ''}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }
}
