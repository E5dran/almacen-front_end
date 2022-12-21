import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.css']
})
export class NewWarehouseComponent implements OnInit {

  formulario: FormGroup

  constructor(private warehouseService: WarehouseService, private router: Router) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    await this.warehouseService.register(this.formulario.value);
    this.router.navigate(['/jefe', 'warehouse', 'modify']);
  }

  checkError(pGet: string, pError: string): boolean | undefined {
    return this.formulario.get(pGet)?.hasError(pError) && this.formulario.get(pGet)?.touched
  }
}



