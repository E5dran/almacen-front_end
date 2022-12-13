import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
    selector: 'new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    formulario: FormGroup;
    constructor() {
        this.formulario = new FormGroup({
            dni: new FormControl(),
            name: new FormControl(),
            categoria: new FormControl(),
            email: new FormControl()

        })
    }


    ngOnInit(): void {


    }




    onSubmit() {
        console.log(this.formulario.value)

    }

}






