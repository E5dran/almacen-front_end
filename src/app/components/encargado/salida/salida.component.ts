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
  sendOrders: Order[]
  warehouse: number | null


  constructor(private orderService: OrderService) {
    this.orders = []
    this.nombre = 'Juan'
    this.apellido = 'Perez'
    this.fecha = new Date()
    this.sendOrders = []
    this.warehouse = 0

  }

  async ngOnInit() {
    const warehouseId = localStorage.getItem('warehouse')
    const intValue = parseInt(warehouseId!)
    this.warehouse = intValue
    this.orders = await this.orderService.getByWarehouseIdStatusCat(this.warehouse, 1, 's')
  }

  onCheckboxChange(orderId: number) {
    this.sendOrders.push(this.orders.find(order => order.id === orderId)!)
    console.log(this.sendOrders)
  }


  async updateStatus(pArray: Order[]) {
    const currentdate = new Date();
    const letra = 'e'
    for (let order of this.sendOrders) {
      const orderId = order.id
      const response2 = await this.orderService.updateStatus(orderId, letra)
      const response = await this.orderService.updateFechaSalida(orderId, currentdate)
      console.log(response, response2, currentdate)
      window.location.reload();
    }
  }



}
