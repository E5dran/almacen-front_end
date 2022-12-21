import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert2'

@Component({
  selector: 'nav-roles',
  templateUrl: './nav-roles.component.html',
  styleUrls: ['./nav-roles.component.css']
})
export class NavRolesComponent implements OnInit {

  sidebarWidth: string;
  activo: boolean;
  inactivo: boolean;
  nombre: string

  color: string;
  backgroundColor: string;

  rol: string;

  constructor(private router: Router) {
    this.sidebarWidth = '0px';
    this.activo = false;
    this.inactivo = true;
    this.nombre = '';

    this.backgroundColor = 'rgb(6, 78, 75)';
    this.color = 'white';
    this.rol = '';
  }

  ngOnInit(): void {
    const tokenInfo = jwt_decode(localStorage.getItem('token')!) as any;

    this.nombre = tokenInfo.user_name;
    this.rol = tokenInfo.user_role;

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
    swal.fire({
      title: 'Logout',
      text: "¿Estas seguro de querer cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#064E4B',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Sesión Cerrada',
          'Hasta pronto!',
          'success'
        )
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    })
  }
}
