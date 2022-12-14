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
      dni: new FormControl(),
      name: new FormControl(),
      categoria: new FormControl(),
      email: new FormControl()

    })
  }


  ngOnInit(): void {
  }


  async onSubmit() {
    await this.userService.modify(this.formulario.value);
  }
  //falta delete//
}