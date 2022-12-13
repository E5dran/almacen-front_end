import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';

@Component({
  selector: 'app-modify-warehouse',
  templateUrl: './modify-warehouse.component.html',
  styleUrls: ['./modify-warehouse.component.css']
})
export class ModifyWarehouseComponent implements OnInit {

  arrModwarehouse: Warehouse[];

  constructor() {
    this.arrModwarehouse = [];
  }

  ngOnInit(): void {
  }

}





