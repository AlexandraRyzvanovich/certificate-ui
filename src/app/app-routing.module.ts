import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CertificateCreationFormComponent} from './certificate-creation-form/certificate-creation-form.component';
import {CertificateFormComponent} from './certificate-form/certificate-form.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {TagCreationFormComponent} from './tag-creation-form/tag-creation-form.component';
import {CertificatesComponent} from './certificates/certificates.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'create-certificate', component: CertificateCreationFormComponent},
  {path: 'certificate-details', component: CertificateFormComponent},
  {path: 'create-tag', component: TagCreationFormComponent},
  {path: 'certificates', component: CertificatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

