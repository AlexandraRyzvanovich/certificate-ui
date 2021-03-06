import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FeaturesModule} from './features/features.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CoreModule,
    FeaturesModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
