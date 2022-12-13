import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-warehouse-modify-id',
  templateUrl: './warehouse-modify-id.component.html',
  styleUrls: ['./warehouse-modify-id.component.css']
})
export class WarehouseModifyIdComponent implements OnInit {
  formulario: FormGroup;

  constructor() {


    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(),


    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formulario.value);

  };
}

