import {Injectable, Injector} from '@angular/core';
// tslint:disable-next-line:import-spacing
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest}
from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private loginService: AuthService;

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loginService = this.injector.get(AuthService);
    const token: string = this.loginService.getToken();
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token != null ? token : ''}`
      }
    });
    return next.handle(request);
  }
}
