import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-modify-id',
  templateUrl: './user-modify-id.component.html',
  styleUrls: ['./user-modify-id.component.css']
})
export class UserModifyIdComponent implements OnInit {

  formulario: FormGroup;

  constructor(private userService: UsuarioService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
      adress: new FormControl(),
      dni: new FormControl(),
      gender: new FormControl(),
      category: new FormControl(),

    })
  }


  ngOnInit(): void {
  }


  async onSubmit() {
    await this.userService.getAll();


  }
  async deleteClick() {
    console.log('hola');
    //const response = await this.userService.delete(id);
    //console.log(response);
  }

}