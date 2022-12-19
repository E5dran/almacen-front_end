import { Component, OnInit, Renderer2 } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  orders: Order[]
  nombre: string;
  apellido: string;
  fecha: Date;
  sendOrders: Order[]
  warehouse: number | null

  constructor(private orderService: OrderService, private router: Router) {
    this.nombre = '',
      this.apellido = '',
      this.fecha = new Date(),
      this.orders = []
    this.sendOrders = []
    this.warehouse = 0

  }

  async ngOnInit() {
    const warehouseId = localStorage.getItem('warehouse')
    this.nombre = localStorage.getItem('nombre')!
    this.apellido = localStorage.getItem('apellido')!
    const intValue = parseInt(warehouseId!)
    this.warehouse = intValue
    this.orders = await this.orderService.getByWarehouseIdStatusCat(this.warehouse, 1, 'e')
  }

  onCheckboxChange(orderId: number) {
    this.sendOrders.push(this.orders.find(order => order.id === orderId)!)
    console.log(this.sendOrders)
  }

  async updateStatus(pArray: Order[]) {
    const currentdate = new Date();
    const letra = 'a'
    for (let order of this.sendOrders) {
      const orderId = order.id
      const response2 = await this.orderService.updateStatus(orderId, letra)
      const response = await this.orderService.updateFechaLlegada(orderId, currentdate)
      console.log(response, response2, currentdate)
      window.location.reload();
    }
  }


}
