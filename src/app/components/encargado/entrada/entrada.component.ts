import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  orders: Order[]
  constructor() {
    this.orders = []
  }

  ngOnInit(): void {
  }

}
