import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
    proyecto: any = {
        img: '/assets/img/proyecto.png'
    }

    constructor() { }

    ngOnInit(): void {
    }

}
