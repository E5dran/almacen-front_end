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
import { OrderModifyComponent } from './components/operario/order-modify/order-modify.component';
import { IdModifyComponent } from './components/operario/id-modify/id-modify.component';
import { NewWarehouseComponent } from './components/jefe/new-warehouse/new-warehouse.component';
import { ModifyUserComponent } from './components/jefe/modify-user/modify-user.component';
import { ModifyWarehouseComponent } from './components/jefe/modify-warehouse/modify-warehouse.component';
import { UserModifyIdComponent } from './components/jefe/user-modify-id/user-modify-id.component';
import { WarehouseModifyIdComponent } from './components/jefe/warehouse-modify-id/warehouse-modify-id.component';

import { SupervisadosComponent } from './components/encargado/supervisados/supervisados.component';
import { LoginGuard } from './guard/login.guard';
const routes: Routes = [
  { path: 'encargado/overview', component: OverviewComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'jefe/overview', component: JefeoverviewComponent, canActivate: [LoginGuard] },
  { path: 'jefe/user/new', component: NewUserComponent, canActivate: [LoginGuard] },
  { path: 'encargado/salida', component: SalidaComponent, canActivate: [LoginGuard] },
  { path: 'encargado/entrada', component: EntradaComponent, canActivate: [LoginGuard] },
  { path: 'encargado/supervisados', component: SupervisadosComponent, canActivate: [LoginGuard] },
  { path: 'operario/overview', component: OperarioOverviewComponent, canActivate: [LoginGuard] },
  { path: 'operario/order/new', component: CreateOrderComponent, canActivate: [LoginGuard] },
  { path: 'operario/order/modify', component: OrderModifyComponent, canActivate: [LoginGuard] },
  { path: 'operario/order/modify/:id', component: IdModifyComponent, canActivate: [LoginGuard] },
  { path: 'jefe/warehouse/new', component: NewWarehouseComponent, canActivate: [LoginGuard] },
  { path: 'jefe/user/modify', component: ModifyUserComponent, canActivate: [LoginGuard] },
  { path: 'jefe/warehouse/modify', component: ModifyWarehouseComponent, canActivate: [LoginGuard] },
  { path: 'jefe/user/modify/:id', component: UserModifyIdComponent, canActivate: [LoginGuard] },
  { path: 'jefe/warehouse/modify/:id', component: WarehouseModifyIdComponent, canActivate: [LoginGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
