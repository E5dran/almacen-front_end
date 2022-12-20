import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'nav-encargado',
  templateUrl: './nav-encargado.component.html',
  styleUrls: ['./nav-encargado.component.css']
})
export class NavEncargadoComponent implements OnInit {

  sidebarWidth: string;
  activo: boolean;
  inactivo: boolean;
  nombre: string

  color: string;
  backgroundColor: string;

  constructor(private router: Router) {
    this.sidebarWidth = '0px';
    this.activo = false;
    this.inactivo = true;
    this.nombre = '';

    this.backgroundColor = 'rgb(6, 78, 75)';
    this.color = 'white';
  }

  ngOnInit(): void {

    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.nombre = tokenInfo.user_name;

    if (window.innerWidth <= 768) {
      this.sidebarWidth = '50px';
      this.backgroundColor = 'white';
      this.color = 'rgb(6, 78, 75)';
    } else {
      this.sidebarWidth = '200px';
    }
  }
  toggleSidebar() {
    if (this.sidebarWidth === '50px') {
      this.sidebarWidth = '200px';
      this.backgroundColor = 'rgb(6, 78, 75)';
      this.color = 'white';
    } else {
      this.sidebarWidth = '50px';
      this.backgroundColor = 'white'
      this.color = 'rgb(6, 78, 75)';
    }
    this.activo = !this.activo
    this.inactivo = !this.inactivo
  }

  logout() {
    if (confirm("¿Estás seguro de querer cerrar sesión?")) {
      localStorage.removeItem('token');
      localStorage.removeItem('warehouse');
      this.router.navigate(['/login']);
    }
  }
}
