import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavEncargadoComponent } from './components/encargado/nav-encargado/nav-encargado.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavEncargadoComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
