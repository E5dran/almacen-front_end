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
    this.arrOrders = [{
      Id: 1,
      Warehouse_Id: 20,
      Status: true,
      Addressee: 'Calle Hola Caraciola',
      Description: 'Fresco',
      N_Items: 8,
      Destination_Address: 'Poligono Rabasa',
      Creation_Date: new Date(),
      Departure_Date: new Date(),
      Arrival_Date: new Date(),
      Truck_Plate: '4569HTM',
      Category: 'e'
    }]
  }

  ngOnInit(): void {
  }

}
