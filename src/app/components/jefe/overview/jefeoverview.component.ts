import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';
import { WarehouseService } from 'src/app/services/warehouse.service';


@Component({
  selector: 'jefeoverview',
  templateUrl: './jefeoverview.component.html',
  styleUrls: ['./jefeoverview.component.css']
})
export class JefeoverviewComponent implements OnInit {

  arrWarehouses: Warehouse[];

  constructor(private warehouseService: WarehouseService) {
    this.arrWarehouses = [];
  }

  async ngOnInit() {
    this.arrWarehouses = await this.warehouseService.getAll()
  }

}
