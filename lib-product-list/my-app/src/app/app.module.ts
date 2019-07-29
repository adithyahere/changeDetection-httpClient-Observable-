import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DaramMyAppModule } from 'daram-my-app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DaramMyAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
