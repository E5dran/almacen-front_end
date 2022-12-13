import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  createOrder: FormGroup;

  constructor() {
    this.createOrder = new FormGroup({
      Client: new FormControl(),
      Description: new FormControl(),
      N_Items: new FormControl(),
      Destination_Address: new FormControl(),
      Truck_Plate: new FormControl(),
      Departure_Date: new FormControl(),
      Arrival_Date: new FormControl()
    });


  }

  ngOnInit(): void {
  }

}
