import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  nombre: string
  apellido: string
  fecha: Date
  constructor() {

    this.nombre = 'Juan'
    this.apellido = 'Perez'
    this.fecha = new Date()

  }

  ngOnInit(): void {
  }

}
