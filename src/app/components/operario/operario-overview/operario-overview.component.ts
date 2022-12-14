import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-operario-overview',
  templateUrl: './operario-overview.component.html',
  styleUrls: ['./operario-overview.component.css']
})
export class OperarioOverviewComponent implements OnInit {

  arrOrders: Order[];
  constructor() {
    this.arrOrders = []
  }

  ngOnInit(): void {
  }

}
