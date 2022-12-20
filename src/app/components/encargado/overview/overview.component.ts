import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  nombre: string
  fecha: Date
  orders: Order[]
  warehouse: number | null

  constructor(private orderService: OrderService) {
    this.orders = [];
    this.nombre = '';
    this.fecha = new Date();
    this.warehouse = 0;
  }

  async ngOnInit() {
    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.nombre = tokenInfo.user_name;
    this.warehouse = tokenInfo.warehouse_id;
    this.orders = await this.orderService.getByWarehouseId(this.warehouse!);
  }

}


