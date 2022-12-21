import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-operario-overview',
  templateUrl: './operario-overview.component.html',
  styleUrls: ['./operario-overview.component.css']
})
export class OperarioOverviewComponent implements OnInit {

  arrOrders: Order[];
  userId: number;

  constructor(private orderService: OrderService) {
    this.arrOrders = [];
    this.userId = 0;
  }

  async ngOnInit() {
    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.userId = tokenInfo.user_id;

    this.arrOrders = await this.orderService.getByUserId(this.userId);
  }

}
