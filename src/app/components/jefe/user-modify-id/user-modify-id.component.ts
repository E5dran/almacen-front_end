import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-modify-id',
  templateUrl: './user-modify-id.component.html',
  styleUrls: ['./user-modify-id.component.css']
})
export class UserModifyIdComponent implements OnInit {

  formulario: FormGroup;

  nId: number;
  private rutaSub: Subscription;

  constructor(private userService: UsuarioService, private router: ActivatedRoute, private routerLink: Router) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
      adress: new FormControl(),
      dni: new FormControl(),
      gender: new FormControl(),
      category: new FormControl(),

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
    const response = await this.userService.modify(this.formulario.value, this.nId);
    this.routerLink.navigate(['/jefe', 'user', 'modify']);
  }

  async deleteClick() {
    const response = await this.userService.delete(this.nId);
    this.routerLink.navigate(['/jefe', 'user', 'modify']);
  }

  ngOnDestroy() {
    this.rutaSub.unsubscribe();
  }
}