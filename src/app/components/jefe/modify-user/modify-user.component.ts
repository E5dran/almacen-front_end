import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  dni: string;
  arrModUser: User[];


  constructor(private userService: UsuarioService, private router: Router) {
    this.arrModUser = [];
    this.dni = '';
  }

  async ngOnInit() {
    this.arrModUser = await this.userService.getAll()
  }


  async onKey(event: any) {
    this.dni = event.target.value;
    if (this.dni === '') {
      this.arrModUser = await this.userService.getAll()
      return;
    } else {
      this.arrModUser = this.arrModUser = await this.userService.getByDni(this.dni)
    }
  };


  async searchUserDni(pDni: string) {
    if (pDni === '') {
      this.arrModUser = await this.userService.getAll()
    } else {
      this.arrModUser = await this.userService.getByDni(pDni)
    }
  }
}
