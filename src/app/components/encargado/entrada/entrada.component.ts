import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert2'

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  orders: Order[];
  nombre: string;
  fecha: Date;
  sendOrders: Order[];
  warehouse: number;

  constructor(private orderService: OrderService) {
    this.nombre = '';
    this.fecha = new Date();
    this.orders = [];
    this.sendOrders = [];
    this.warehouse = 0;
  }

  async ngOnInit() {

    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.nombre = tokenInfo.user_name;
    this.warehouse = tokenInfo.warehouse_id;
    this.orders = await this.orderService.getByWarehouseIdStatusCat(this.warehouse!, 0, 'e');

    if (this.orders.length === 0) {
      swal.fire({
        title: 'No tienes mas pedidos que validar por ahora',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  onCheckboxChange(orderId: number) {
    this.sendOrders.push(this.orders.find(order => order.id === orderId)!);
  }

  async updateStatus() {
    const currentdate = new Date();
    const letra = 'a'
    const nStatus = 1;
    for (let order of this.sendOrders) {
      const orderId = order.id;
      await this.orderService.updateCategory(orderId, letra);
      await this.orderService.updateArrivalDate(orderId, currentdate);
      await this.orderService.updateStatus(orderId, nStatus);
      window.location.reload();
    }
  }


}
