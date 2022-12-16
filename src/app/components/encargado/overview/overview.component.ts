import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  nombre: string
  apellido: string
  fecha: Date
  orders: Order[]
  warehouse: number | null

  constructor(private orderService: OrderService) {
    this.orders = []
    this.nombre = 'Juan'
    this.apellido = 'Perez'
    this.fecha = new Date()
    this.warehouse = 0
  }

  async ngOnInit() {
    const warehouseId = localStorage.getItem('warehouse')
    const intValue = parseInt(warehouseId!)
    this.warehouse = intValue
    this.orders = await this.orderService.getByWarehouseId(this.warehouse)
    console.log(this.orders)
  }

}


