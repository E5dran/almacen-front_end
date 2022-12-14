import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { DatePipe } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-operario-overview',
  templateUrl: './operario-overview.component.html',
  styleUrls: ['./operario-overview.component.css']
})
export class OperarioOverviewComponent implements OnInit {

  arrOrders: Order[];
  constructor(
    private orderService: OrderService
  ) {
    this.arrOrders = []
  }

  async ngOnInit() {
    this.arrOrders = await this.orderService.getAll();
  }

}
