import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup
  currentHour: any
  saludo: string


  constructor(
    private userService: UsuarioService,
    private router: Router
  ) {
    this.currentHour = new Date().getHours();
    this.saludo = ''

    this.formularioLogin = new FormGroup({
      dni: new FormControl('', [
        Validators.required,
        this.dniValidator]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ])
    });
  }

  ngOnInit(): void {
    if (this.currentHour < 12) {
      this.saludo = 'Buenos días';
    } else {
      this.saludo = 'Buenas tardes';
    }
  }


  async onSubmit() {
    const response = await this.userService.login(this.formularioLogin.value);

    if (response.success) {
      localStorage.setItem('token', response.token);
      if (response.category === 'jefe') {
        this.router.navigate(['/jefe', 'overview'])
      } else if (response.category === 'encargado') {
        this.router.navigate(['/encargado', 'overview'])
      } else if (response.category === 'operario') {
        this.router.navigate(['/operario', 'overview'])
      }
    } else { alert(response.fatal) };
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
