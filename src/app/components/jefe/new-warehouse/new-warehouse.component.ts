import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.css']
})
export class NewWarehouseComponent implements OnInit {

  formulario: FormGroup

  constructor(private warehouseService: WarehouseService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      direccion: new FormControl()

    })
  }


  ngOnInit(): void {


  }




  async onSubmit() {
    await this.warehouseService.register(this.formulario.value)


  }

}