import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-order-modify',
  templateUrl: './order-modify.component.html',
  styleUrls: ['./order-modify.component.css']
})
export class OrderModifyComponent implements OnInit {

  word: string;
  arrModOrder: Order[];
  userId: number;

  constructor(private orderService: OrderService) {
    this.arrModOrder = [];
    this.word = '';
    this.userId = 0;
  }

  async ngOnInit() {
    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.userId = tokenInfo.user_id;

    this.arrModOrder = await this.orderService.getByUserId(this.userId);
  }



  async onKey(event: any) {
    this.word = event.target.value;
    if (this.word === '') {
      this.arrModOrder = await this.orderService.getAll();
      return;
    } else {
      this.arrModOrder = await this.orderService.getByOrderClient(this.word)
    }
  };

  async searchName(pName: string) {
    if (pName === '') {
      this.arrModOrder = await this.orderService.getAll();
      return;
    } else {
      this.arrModOrder = await this.orderService.getByOrderClient(pName)
    }
  };


}
