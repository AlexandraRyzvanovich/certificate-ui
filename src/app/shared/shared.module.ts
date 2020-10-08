import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogGeneralComponent } from './dialog/dialig-general/dialog-general.component';
import { DialigInternalServerErrorComponent } from './dialog/dialig-internal-server-error/dialig-internal-server-error.component';
import { DialigErrorComponent } from './dialog/dialig-error/dialig-error.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CartDialogComponent,
    DialogGeneralComponent,
    DialigInternalServerErrorComponent,
    DialigErrorComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    CartDialogComponent
  ]
})
export class SharedModule {
}

