import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    formulario: FormGroup;

    constructor(private userService: UsuarioService) {
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

    }


    ngOnInit(): void {


    }




    async onSubmit() {
        await this.userService.register(this.formulario.value);

    }

}






