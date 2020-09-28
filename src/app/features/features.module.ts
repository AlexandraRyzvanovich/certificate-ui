import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {LoginComponent} from './login/login.component';
import {CertificateFormComponent} from './certificate-form/certificate-form.component';
import {CertificatesComponent} from './certificates/certificates.component';
import {RegisterComponent} from './register/register.component';
import {CertificateCreationFormComponent} from './certificate-creation-form/certificate-creation-form.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {CheckoutComponent} from './checkout/checkout.component';
import {TagCreationFormComponent} from './tag-creation-form/tag-creation-form.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    CertificatesComponent,
    CertificateFormComponent,
    LoginComponent,
    RegisterComponent,
    CertificateCreationFormComponent,
    CheckoutComponent,
    TagCreationFormComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    ScrollingModule
  ],
})
export class FeaturesModule {

}
