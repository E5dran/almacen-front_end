import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-modify-id',
  templateUrl: './user-modify-id.component.html',
  styleUrls: ['./user-modify-id.component.css']
})
export class UserModifyIdComponent implements OnInit {

  formulario: FormGroup;
  constructor() {
    this.formulario = new FormGroup({
      dni: new FormControl(),
      name: new FormControl(),
      categoria: new FormControl(),
      email: new FormControl()

    })
  }


  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formulario.value);

  }
}
