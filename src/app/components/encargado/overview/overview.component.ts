import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';

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
  constructor() {
    this.orders = []
    this.nombre = 'Juan'
    this.apellido = 'Perez'
    this.fecha = new Date()
  }

  ngOnInit(): void {


  }

}
