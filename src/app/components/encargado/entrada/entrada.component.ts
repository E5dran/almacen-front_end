import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
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
  constructor(private orderService: OrderService) {
    this.nombre = '',
      this.apellido = '',
      this.fecha = new Date(),
      this.orders = []
  }

  async ngOnInit() {
    this.orders = await this.orderService.getByWarehouseIdStatusCat(2, 1, 'e')
  }

  async updateStatus(orderId: number) {
    const currentdate = new Date();
    const letra = 'a'
    const response2 = await this.orderService.updateStatus(orderId, letra)
    const response = await this.orderService.updateFechaLlegada(orderId, currentdate)
    console.log(response, response2, currentdate)

  }


}
