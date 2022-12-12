import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavEncargadoComponent } from './components/encargado/nav-encargado/nav-encargado.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> componentes-login

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavEncargadoComponent,
    OverviewComponent
=======
    LoginComponent
>>>>>>> componentes-login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
