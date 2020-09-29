import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';
import {CertificateCreatePageComponent} from './features/certificates/certificate-create-page/certificate-create-page.component';
import {CertificateDetailsPageComponent} from './features/certificates/certificate-details-page/certificate-details-page.component';
import {CheckoutComponent} from './features/checkout/checkout.component';
import {TagCreationFormComponent} from './features/tag/tag-creation-form/tag-creation-form.component';
import {SearchCertificatesComponent} from './features/certificates/search-certificates/search-certificates.component';
import {UserGuard} from './core/guards/user.guard';
import {AdminGuard} from './core/guards/admin.guard';
import {OrdersPageComponent} from './features/orders/orders-page/orders-page.component';
import {OrderComponent} from './features/orders/order-component/order.component';
import {OrderDetailsPageComponent} from './features/orders/order-details-page/order-details-page.component';
import {CertificateUpdatePageComponent} from './features/certificates/certificate-update-page/certificate-update-page.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'create-tag', component: TagCreationFormComponent},
  {path: 'certificates', component: SearchCertificatesComponent},
  {
    path: 'orders',
    children: [
      {
        path: '',
        component: OrdersPageComponent,
         canActivate: [UserGuard]
      },
      {
        path: ':id/details',
        component: OrderDetailsPageComponent,
        canActivate: [UserGuard]
      },
    ]
  },
  {
    path: 'certificates',
    children: [
      {
        path: '',
        component: SearchCertificatesComponent
      },
      {
        path: ':id/details',
        component: CertificateDetailsPageComponent
      },
      {
        path: 'create',
        component: CertificateCreatePageComponent,
        // canActivate: [AdminGuard]
      },
      {
        path: ':id/update',
        component: CertificateUpdatePageComponent,
        // canActivate: [AdminGuard]
      }
    ]
  },
  { path: '**', redirectTo: 'certificates' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

