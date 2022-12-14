import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-modify-warehouse',
  templateUrl: './modify-warehouse.component.html',
  styleUrls: ['./modify-warehouse.component.css']
})
export class ModifyWarehouseComponent implements OnInit {

  arrModwarehouse: Warehouse[];


  constructor(private warehouseService: WarehouseService) {
    this.arrModwarehouse = [];
  }

  async ngOnInit() {
    this.arrModwarehouse = await this.warehouseService.getAll()
    console.log(this.arrModwarehouse)
  }

}





