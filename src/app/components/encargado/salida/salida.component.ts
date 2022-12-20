import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  nombre: string;
  fecha: Date;
  orders: Order[];
  sendOrders: Order[];
  warehouse: number;

  constructor(private orderService: OrderService) {
    this.orders = [];
    this.nombre = '';
    this.fecha = new Date();
    this.sendOrders = [];
    this.warehouse = 0;
  }

  async ngOnInit() {
    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.nombre = tokenInfo.user_name;
    this.warehouse = tokenInfo.warehouse_id;
    this.orders = await this.orderService.getByWarehouseIdStatusCat(this.warehouse!, 0, 's');

    if (this.orders.length === 0) {
      confirm("No tienes pedidos pendientes de revisar");
    }
  }

  onCheckboxChange(orderId: number) {
    this.sendOrders.push(this.orders.find(order => order.id === orderId)!)
  }

  async updateStatus(pArray: Order[]) {
    const currentdate = new Date();
    const letra = 'e'
    for (let order of this.sendOrders) {
      const orderId = order.id;
      await this.orderService.updateStatus(orderId, letra);
      await this.orderService.updateDepartureDate(orderId, currentdate);
      await this.orderService.updateWarehouseId(orderId, order.destination_wh_id);
      window.location.reload();
    }
  }
}
