import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup


  constructor() {

    this.formularioLogin = new FormGroup({
      dni: new FormControl('', [
        Validators.required,
        this.dniValidator]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ]
      )
    })



  }


  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formularioLogin.value)

    // enviar a la base de datos para que nos de la autorizacion

  }


  dniValidator(control: AbstractControl) {
    const dni = control.value;

    if (!dni) return null;

    const listaLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const numeroDni = dni.substring(0, dni.length - 1);
      const letraDni = dni.charAt(dni.length - 1);

      const resto = numeroDni % 23;

      if (letraDni.toUpperCase() !== listaLetras[resto]) {
        return { dnivalidator: 'La letra del DNI es incorrecta' }
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato del DNI es incorrecto' }
    }
  }

}
