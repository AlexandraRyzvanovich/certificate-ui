import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenService } from './services/jwt-token.service';
import { CertificateService } from './services/certificate.service';
import { TagService } from './services/tag.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ErrorInterceptor } from './interceptors/auth-error.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }
]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        JwtTokenService,
        CertificateService,
        TagService,
        AdminGuard,
        UserGuard
      ]
    };
  }
}
