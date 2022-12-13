import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/encargado/overview/overview.component';
import { SalidaComponent } from './components/encargado/salida/salida.component';
import { JefeoverviewComponent } from './components/jefe/overview/jefeoverview.component';
import { EntradaComponent } from './components/encargado/entrada/entrada.component';
import { NewUserComponent } from './components/jefe/new-user/new-user.component';
import { OperarioOverviewComponent } from './components/operario/operario-overview/operario-overview.component';
import { CreateOrderComponent } from './components/operario/create-order/create-order.component';
import { NewWarehouseComponent } from './components/jefe/new-warehouse/new-warehouse.component';
import { ModifyUserComponent } from './components/jefe/modify-user/modify-user.component';
import { ModifyWarehouseComponent } from './components/jefe/modify-warehouse/modify-warehouse.component';
import { UserModifyIdComponent } from './components/jefe/user-modify-id/user-modify-id.component';
import { WarehouseModifyIdComponent } from './components/jefe/warehouse-modify-id/warehouse-modify-id.component';

const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jefe/overview', component: JefeoverviewComponent },
  { path: 'jefe/user/new', component: NewUserComponent },
  { path: 'encargado/salida', component: SalidaComponent },
  { path: 'encargado/entrada', component: EntradaComponent },
  { path: 'encargado/supervisados', component: EntradaComponent },
  { path: 'operario/overview', component: OperarioOverviewComponent },
  { path: 'operario/order/new', component: CreateOrderComponent },
  { path: 'jefe/warehouse/new', component: NewWarehouseComponent },
  { path: 'jefe/user/modify', component: ModifyUserComponent },
  { path: 'jefe/warehouse/modify', component: ModifyWarehouseComponent },
  { path: 'jefe/user/modify/:id', component: UserModifyIdComponent },
  { path: 'jefe/warehouse/modify/:id', component: WarehouseModifyIdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
