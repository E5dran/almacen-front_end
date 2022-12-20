import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  formulario: FormGroup;
  warehouses: Warehouse[];

  constructor(private userService: UsuarioService, private router: Router, private warehouseService: WarehouseService) {
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
      warehouse_id: new FormControl()
    })
    this.warehouses = [];
  }
  async ngOnInit() {
    this.warehouses = await this.warehouseService.getAll();
  }

  async onSubmit() {
    await this.userService.register(this.formulario.value);
    this.router.navigate(['/jefe', 'user', 'modify']);
  }
}






