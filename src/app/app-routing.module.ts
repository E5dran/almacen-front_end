import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';

import { JefeoverviewComponent } from './components/jefe/overview/jefeoverview.component';
import { OperarioOverviewComponent } from './components/operario/operario-overview/operario-overview.component';
const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jefeoverview', component: JefeoverviewComponent },
  { path: 'operario/overview', component: OperarioOverviewComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
