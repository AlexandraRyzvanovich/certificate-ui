import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {LoginComponent} from './login/login.component';
import {CertificateDetailsPageComponent} from './certificates/certificate-details-page/certificate-details-page.component';
import {SearchCertificatesComponent} from './certificates/search-certificates/search-certificates.component';
import {RegisterComponent} from './register/register.component';
import {CertificateCreatePageComponent} from './certificates/certificate-create-page/certificate-create-page.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {CartCertificateComponent} from './card/cart-certificate/cart-certificate.component';
import {TagCreationFormComponent} from './tag/tag-creation-form/tag-creation-form.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { OrderComponent } from './orders/order-component/order.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { OrderDetailsPageComponent } from './orders/order-details-page/order-details-page.component';
import { CertificateComponentComponent } from './certificates/certificate-component/certificate-component.component';
import { CertificateUpdatePageComponent } from './certificates/certificate-update-page/certificate-update-page.component';
import { TagComponent } from './tag/tag/tag.component';
import { CartPageComponent } from './card/card-page/cart-page.component';
import { DialogCartComponent } from './card/card-page/dialog-cart/dialog-cart.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SearchCertificatesComponent,
    CertificateDetailsPageComponent,
    LoginComponent,
    RegisterComponent,
    CertificateCreatePageComponent,
    CartCertificateComponent,
    TagCreationFormComponent,
    OrderComponent,
    OrdersPageComponent,
    OrderDetailsPageComponent,
    CertificateComponentComponent,
    CertificateUpdatePageComponent,
    TagComponent,
    CartPageComponent,
    DialogCartComponent,
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
    ScrollingModule,
    MatDialogModule
  ],
  exports: [
    TagComponent
  ]
})
export class FeaturesModule {

}
