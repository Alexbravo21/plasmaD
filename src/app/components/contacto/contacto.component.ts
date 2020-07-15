import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
    FormData: FormGroup;

    constructor(private builder: FormBuilder, private contact: ContactService) { }

    ngOnInit(): void {
        this.FormData = this.builder.group({
            Nombre: new FormControl('', [Validators.required]),
            Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
            Tel: new FormControl('', [Validators.required]),
            Comment: new FormControl('', [Validators.required])
        })
    }

    onSubmit(FormData) {
        console.log(FormData)
        this.contact.PostMessage(FormData)
            .subscribe(response => {
                //location.href = 'https://mailthis.to/confirm'
                alert("Tu mensaje ha sido recibido, nos comunicaremos contigo lo más pronto posible");
                this.FormData.reset();
                console.log(response)
            }, error => {
                alert(error)
            })
    }

    }
