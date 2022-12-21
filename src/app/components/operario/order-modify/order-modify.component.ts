import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-modify',
  templateUrl: './order-modify.component.html',
  styleUrls: ['./order-modify.component.css']
})
export class OrderModifyComponent implements OnInit {

  word: string;
  arrModOrder: Order[];

  constructor(private orderService: OrderService) {
    this.arrModOrder = [];
    this.word = '';
  }
  async ngOnInit() {
    // cambiar a MIS pedidos
    this.arrModOrder = await this.orderService.getAll();
  }

  async searchName(pName: string) {
    if (pName === '') {
      this.arrModOrder = await this.orderService.getAll();
      return;
    } else {
      this.arrModOrder = await this.orderService.getByOrderClient(pName)
    }
  };


}
