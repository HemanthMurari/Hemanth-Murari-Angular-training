import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Header1Component } from './header1/header1.component';
import { Continer1Component } from './continer1/continer1.component';
import { Footer1Component } from './footer1/footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Header1Component,
    Continer1Component,
    Footer1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
