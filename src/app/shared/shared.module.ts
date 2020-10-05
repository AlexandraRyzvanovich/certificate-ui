import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CartDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]
})
export class SharedModule {
}

