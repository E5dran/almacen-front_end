import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-order-modify',
  templateUrl: './order-modify.component.html',
  styleUrls: ['./order-modify.component.css']
})
export class OrderModifyComponent implements OnInit {

  arrModOrder: Order[];

  constructor() {
    this.arrModOrder = [];
  }



  ngOnInit(): void {
  }

}
