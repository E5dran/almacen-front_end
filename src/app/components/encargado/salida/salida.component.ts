import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  nombre: string
  apellido: string
  fecha: Date
  orders: Order[]
  constructor(private orderService: OrderService) {
    this.orders = []
    this.nombre = 'Juan'
    this.apellido = 'Perez'
    this.fecha = new Date()
  }

  async ngOnInit() {
    this.orders = await this.orderService.getByWarehouseIdStatusCat(2, 1, 's')
  }

  async updateStatus(orderId: number) {
    const currentdate = new Date();
    const letra = 'e'
    const response2 = await this.orderService.updateStatus(orderId, letra)
    const response = await this.orderService.updateFechaSalida(orderId, currentdate)
    console.log(response, response2, currentdate)

  }


}
