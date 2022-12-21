import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { AbstractControl } from '@angular/forms';

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
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/)]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
      adress: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, this.dniValidator]),
      gender: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      warehouse_id: new FormControl('', [Validators.required])
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

  checkError(pGet: string, pError: string): boolean | undefined {
    return this.formulario.get(pGet)?.hasError(pError) && this.formulario.get(pGet)?.touched
  }

  dniValidator(control: AbstractControl) {
    const value = control.value;
    const lista_letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (!value) return null;

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      let numero = value.slice(0, 8);
      const letra = value[8];
      numero %= 23;

      if (lista_letras[numero] !== letra.toUpperCase()) {
        return { dnivalidator: 'La letra del DNI es incorrecta' };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato del DNI es incorrecto' }
    }

  }



}






