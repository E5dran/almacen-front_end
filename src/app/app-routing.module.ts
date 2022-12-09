import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavEncargadoComponent } from './components/encargado/nav-encargado/nav-encargado.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
