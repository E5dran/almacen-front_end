import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import jwt_decode from "jwt-decode";
import { Warehouse } from 'src/app/interfaces/warehouse.interface';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  createOrder: FormGroup;
  warehouses: Warehouse[];

  constructor(private orderService: OrderService, private router: Router, private warehouseService: WarehouseService) {
    this.createOrder = new FormGroup({
      addressee: new FormControl(),
      description: new FormControl(),
      n_items: new FormControl(),
      destination_address: new FormControl(),
      truck_plate: new FormControl(),
      departure_date: new FormControl(),
      arrival_date: new FormControl(),
      warehouse_id: new FormControl(),
      user_id: new FormControl(),
      destination_wh_id: new FormControl()
    });
    this.warehouses = [];
  }

  async ngOnInit() {
    this.warehouses = await this.warehouseService.getAll();
  }

  async onSubmit() {

    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.createOrder.get('user_id')?.setValue(tokenInfo.user_id);
    this.createOrder.get('warehouse_id')?.setValue(tokenInfo.warehouse_id);

    await this.orderService.register(this.createOrder.value);
    this.router.navigate(['/operario', 'order', 'modify']);
  }

}
