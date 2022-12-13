import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-id-modify',
  templateUrl: './id-modify.component.html',
  styleUrls: ['./id-modify.component.css']
})
export class IdModifyComponent implements OnInit {

  modifyOrder: FormGroup;

  constructor() {
    this.modifyOrder = new FormGroup({
      Client: new FormControl(),
      Description: new FormControl(),
      N_Items: new FormControl(),
      Destination_Address: new FormControl(),
      Truck_Plate: new FormControl(),
      Departure_Date: new FormControl(),
      Arrival_Date: new FormControl()
    })
  }

  ngOnInit(): void {
  }

}
