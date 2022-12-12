import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
import { SalidaComponent } from './components/encargado/salida/salida.component';
import { JefeoverviewComponent } from './components/jefe/overview/jefeoverview.component';
const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'encargado/salida', component: SalidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jefeoverview', component: JefeoverviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
