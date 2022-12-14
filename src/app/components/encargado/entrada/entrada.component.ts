import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';

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
  constructor() {
    this.nombre = '',
      this.apellido = '',
      this.fecha = new Date(),
      this.orders = []
  }

  ngOnInit(): void {
  }

}
