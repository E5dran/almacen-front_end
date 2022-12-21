import { Component, OnInit, } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-supervisados',
  templateUrl: './supervisados.component.html',
  styleUrls: ['./supervisados.component.css']
})
export class SupervisadosComponent implements OnInit {
  nombre: string;
  fecha: Date;
  orders: Order[];
  warehouse: number;

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
    this.orders = await this.orderService.getByWarehouseIdStatus(this.warehouse!, 1)
  }
}