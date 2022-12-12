import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { OverviewComponent } from './components/encargado/overview/overview.component';
const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },

];
=======
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent }

];

>>>>>>> componentes-login
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
