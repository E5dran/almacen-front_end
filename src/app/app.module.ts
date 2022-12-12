import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavEncargadoComponent } from './components/encargado/nav-encargado/nav-encargado.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
import { LoginComponent } from './components/login/login.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { JefeoverviewComponent } from './components/jefeoverview/jefeoverview.component';
registerLocaleData(localeEs, 'es');



@NgModule({
  declarations: [
    AppComponent,
    NavEncargadoComponent,
    OverviewComponent,
    LoginComponent,
    JefeoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
