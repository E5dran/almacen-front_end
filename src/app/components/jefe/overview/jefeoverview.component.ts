import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/interfaces/warehouse.interface';


@Component({
  selector: 'jefeoverview',
  templateUrl: './jefeoverview.component.html',
  styleUrls: ['./jefeoverview.component.css']
})
export class JefeoverviewComponent implements OnInit {

  arrDatos: Warehouse[];

  constructor() {
    this.arrDatos = [{
      id: 1,
      name: 'center',
      address: 'c/Alava 14'

    }];

  }




  ngOnInit(): void {
  }

}
