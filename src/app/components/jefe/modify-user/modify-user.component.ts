import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  arrModUser: User[];


  constructor(private userService: UsuarioService) {
    this.arrModUser = [];
  }

  async ngOnInit() {
    this.arrModUser = await this.userService.getAll()
  }

}
