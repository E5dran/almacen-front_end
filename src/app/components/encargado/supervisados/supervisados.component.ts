import { Component, OnInit, } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-supervisados',
  templateUrl: './supervisados.component.html',
  styleUrls: ['./supervisados.component.css']
})
export class SupervisadosComponent implements OnInit {
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

    this.orders = await this.orderService.getByWarehouseIdStatus(2, 1)
  }

}
