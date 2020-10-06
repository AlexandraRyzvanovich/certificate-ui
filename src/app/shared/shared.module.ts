import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CartDialogComponent
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

