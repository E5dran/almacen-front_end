import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-modify-warehouse',
  templateUrl: './modify-warehouse.component.html',
  styleUrls: ['./modify-warehouse.component.css']
})
export class ModifyWarehouseComponent implements OnInit {

  word: string;
  arrModwarehouse: Warehouse[];


  constructor(private warehouseService: WarehouseService, private router: Router) {
    this.word = '';
    this.arrModwarehouse = [];
  }

  async ngOnInit() {
    this.arrModwarehouse = await this.warehouseService.getAll()
  }

  async onKey(event: any) {
    this.word = event.target.value;
    if (this.word === '') {
      this.arrModwarehouse = await this.warehouseService.getAll()
      return;
    } else {
      this.arrModwarehouse = await this.warehouseService.getByWarehouseName(this.word)
    }
  };

};





