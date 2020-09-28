import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';
import {CertificateCreationFormComponent} from './features/certificate-creation-form/certificate-creation-form.component';
import {CertificateFormComponent} from './features/certificate-form/certificate-form.component';
import {CheckoutComponent} from './features/checkout/checkout.component';
import {TagCreationFormComponent} from './features/tag-creation-form/tag-creation-form.component';
import {CertificatesComponent} from './features/certificates/certificates.component';
import {UserGuard} from './core/guards/user.guard';


const id = null;
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'create-certificate', component: CertificateCreationFormComponent},
  {path: 'certificate-details/:id', component: CertificateFormComponent},
  {path: 'create-tag', component: TagCreationFormComponent},
  {path: 'certificates', component: CertificatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

