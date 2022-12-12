import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
import { SalidaComponent } from './components/encargado/salida/salida.component';
const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'encargado/salida', component: SalidaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
