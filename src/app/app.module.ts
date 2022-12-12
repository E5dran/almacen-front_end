import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavEncargadoComponent } from './components/encargado/nav-encargado/nav-encargado.component';
=======
import { OverviewComponent } from './components/overview/overview.component';
>>>>>>> encargado-overview

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavEncargadoComponent
=======
    OverviewComponent
>>>>>>> encargado-overview
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
