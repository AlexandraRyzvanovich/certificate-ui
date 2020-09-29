import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';
import {CertificateCreationFormComponent} from './features/certificates/certificate-creation-form/certificate-creation-form.component';
import {CertificateFormComponent} from './features/certificates/certificate-form/certificate-form.component';
import {CheckoutComponent} from './features/checkout/checkout.component';
import {TagCreationFormComponent} from './features/tag/tag-creation-form/tag-creation-form.component';
import {SearchCertificatesComponent} from './features/certificates/search-certificates/search-certificates.component';
import {UserGuard} from './core/guards/user.guard';
import {AdminGuard} from './core/guards/admin.guard';
import {OrdersPageComponent} from './features/orders/orders-page/orders-page.component';
import {OrderComponent} from './features/orders/order-component/order.component';
import {OrderDetailsPageComponent} from './features/orders/order-details-page/order-details-page.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [UserGuard]},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'create-certificate', component: CertificateCreationFormComponent},
  {path: 'certificate-details/:id', component: CertificateFormComponent},
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
  { path: '**', redirectTo: 'certificates' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

