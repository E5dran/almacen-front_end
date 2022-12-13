import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
import { JefeoverviewComponent } from './components/jefe/overview/jefeoverview.component';
import { NewUserComponent } from './components/jefe/new-user/new-user.component';
const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jefe/overview', component: JefeoverviewComponent },
  { path: 'jefe/user/new', component: NewUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
