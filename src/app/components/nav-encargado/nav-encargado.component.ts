import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'nav-encargado',
  templateUrl: './nav-encargado.component.html',
  styleUrls: ['./nav-encargado.component.css']
})
export class NavEncargadoComponent implements OnInit {
  sidebarWidth: string;

  constructor() {
    this.sidebarWidth = '0px'

  }

  ngOnInit(): void {

    if (window.innerWidth <= 768) {
      this.sidebarWidth = '0px';
    } else {
      this.sidebarWidth = '200px';
    }

  }


  toggleSidebar() {
    if (this.sidebarWidth === '0px') {
      this.sidebarWidth = '200px';
    } else {
      this.sidebarWidth = '0px';
    }
  }
}






