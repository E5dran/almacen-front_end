import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { NavEncargadoComponent } from './components/encargado/nav-encargado/nav-encargado.component';

const routes: Routes = [

=======
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },
>>>>>>> encargado-overview
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
