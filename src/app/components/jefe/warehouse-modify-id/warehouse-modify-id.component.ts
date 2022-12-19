import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-modify-id',
  templateUrl: './warehouse-modify-id.component.html',
  styleUrls: ['./warehouse-modify-id.component.css']
})
export class WarehouseModifyIdComponent implements OnInit {

  formulario: FormGroup;

  nId: number;
  private rutaSub: Subscription;
  word: string;

  constructor(private warehouseService: WarehouseService, private router: ActivatedRoute, private routerLink: Router) {

    this.word = '';
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(),

    })
    this.nId = 0;
    this.rutaSub = new Subscription;
  }

  ngOnInit(): void {
    this.rutaSub = this.router.params.subscribe(params => {

      this.nId = params['id']
    });
    console.log(this.nId);

  }

  async onSubmit() {
    await this.warehouseService.modify(this.formulario.value, this.nId);
    this.routerLink.navigate(['/jefe', 'warehouse', 'modify']);
  }

  async deleteClick() {
    await this.warehouseService.delete(this.nId);
    this.routerLink.navigate(['/jefe', 'warehouse', 'modify']);
  }

  ngOnDestroy() {
    this.rutaSub.unsubscribe();
  }


  async searchName(pName: string) {
    const response = await this.warehouseService.getByWarehouseName(this.word)
    window.location.reload();
  };

}