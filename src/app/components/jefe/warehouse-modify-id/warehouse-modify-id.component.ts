import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-modify-id',
  templateUrl: './warehouse-modify-id.component.html',
  styleUrls: ['./warehouse-modify-id.component.css']
})
export class WarehouseModifyIdComponent implements OnInit {
  formulario: FormGroup;

  constructor(private warehouseService: WarehouseService) {


    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(),


    });
  }
  ngOnInit(): void {
  }
  onSubmit() { };
  // async onSubmit() {
  //  await this.warehouseService.modify(this.formulario.value, String );

  //falta delete

};
//}

