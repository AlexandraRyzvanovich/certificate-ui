import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CertificateFormComponent } from './certificate-form/certificate-form.component';
import { CertificateCreationFormComponent } from './certificate-creation-form/certificate-creation-form.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TagCreationFormComponent } from './tag-creation-form/tag-creation-form.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CheckoutComponent,
    RegisterComponent,
    CertificateFormComponent,
    CertificateCreationFormComponent,
    CertificatesComponent,
    TagCreationFormComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
