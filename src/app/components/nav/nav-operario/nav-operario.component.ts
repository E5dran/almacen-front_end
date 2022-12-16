import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-operario',
  templateUrl: './nav-operario.component.html',
  styleUrls: ['./nav-operario.component.css']
})
export class NavOperarioComponent implements OnInit {

  sidebarWidth: string;
  activo: boolean;
  inactivo: boolean;
  nombreEncargado: string

  color: string;
  backgroundColor: string;

  constructor(private router: Router) {
    this.sidebarWidth = '0px';
    this.activo = false;
    this.inactivo = true;
    this.nombreEncargado = 'Oscar';

    this.backgroundColor = 'rgb(6, 78, 75)';
    this.color = 'white';
  }

  ngOnInit(): void {

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
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }
}
