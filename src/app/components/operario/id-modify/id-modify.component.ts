import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-id-modify',
  templateUrl: './id-modify.component.html',
  styleUrls: ['./id-modify.component.css']
})
export class IdModifyComponent implements OnInit {

  modifyOrder: FormGroup;

  nId: number;
  private rutaSub: Subscription;

  constructor(private orderService: OrderService, private router: ActivatedRoute, private routerLink: Router) {
    this.modifyOrder = new FormGroup({
      addressee: new FormControl(),
      description: new FormControl(),
      n_items: new FormControl(),
      destination_address: new FormControl(),
      truck_plate: new FormControl(),
      departure_date: new FormControl(),
      arrival_date: new FormControl()
    })
    this.nId = 0;
    this.rutaSub = new Subscription
  }

  ngOnInit(): void {
    this.rutaSub = this.router.params.subscribe(async (params) => {
      this.nId = params['id'];
      const [modOrder] = await this.orderService.getById(this.nId);
      this.modifyOrder.get('addressee')?.setValue(modOrder.addressee);
      this.modifyOrder.get('description')?.setValue(modOrder.description);
      this.modifyOrder.get('n_items')?.setValue(modOrder.n_items);
      this.modifyOrder.get('destination_address')?.setValue(modOrder.destination_address);
      this.modifyOrder.get('truck_plate')?.setValue(modOrder.truck_plate);
      this.modifyOrder.get('departure_date')?.setValue(dayjs(modOrder.departure_date).format('YYYY-MM-DD'));
      this.modifyOrder.get('arrival_date')?.setValue(dayjs(modOrder.arrival_date).format('YYYY-MM-DD'));
    });
  }

  async onSubmit() {
    const respoonse = await this.orderService.modify(this.modifyOrder.value, this.nId);


    this.routerLink.navigate(['/operario', 'order', 'modify']);
  }

  async deleteClick() {
    await this.orderService.delete(this.nId);
    this.routerLink.navigate(['/operario', 'order', 'modify']);
  }

  ngOnDestroy() {
    this.rutaSub.unsubscribe();
  }
}
