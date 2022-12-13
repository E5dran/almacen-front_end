import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
import { LoginComponent } from './components/login/login.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { NewUserComponent } from './components/jefe/new-user/new-user.component';

import { NavJefeComponent } from './components/nav/nav-jefe/nav-jefe.component';
import { NavOperarioComponent } from './components/nav/nav-operario/nav-operario.component';
import { NavEncargadoComponent } from './components/nav/nav-encargado/nav-encargado.component';

import { SalidaComponent } from './components/encargado/salida/salida.component';
import { JefeoverviewComponent } from './components/jefe/overview/jefeoverview.component';
import { EntradaComponent } from './components/encargado/entrada/entrada.component';
import { SupervisadosComponent } from './components/encargado/supervisados/supervisados.component';

import { OperarioOverviewComponent } from './components/operario/operario-overview/operario-overview.component';
import { CreateOrderComponent } from './components/operario/create-order/create-order.component';
import { OrderModifyComponent } from './components/operario/order-modify/order-modify.component';
import { IdModifyComponent } from './components/operario/id-modify/id-modify.component';
registerLocaleData(localeEs, 'es');



@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LoginComponent,
    SalidaComponent,
    LoginComponent,
    JefeoverviewComponent,
    NewUserComponent,
    NavJefeComponent,
    NavEncargadoComponent,
    NavOperarioComponent,
    EntradaComponent,
    SupervisadosComponent,
    OperarioOverviewComponent,
    CreateOrderComponent,
    OrderModifyComponent,
    IdModifyComponent
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
