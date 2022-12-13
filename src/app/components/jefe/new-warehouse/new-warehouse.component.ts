import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.css']
})
export class NewWarehouseComponent implements OnInit {

  formulario: FormGroup

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl(),
      direccion: new FormControl()

    })
  }


  ngOnInit(): void {


  }




  onSubmit() {
    console.log(this.formulario.value)

  }

}