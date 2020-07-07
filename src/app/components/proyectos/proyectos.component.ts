import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
    proyectos: Entry<any>[] = [];

    constructor(private router: Router, private contentful: ContentfulService) { }

    ngOnInit(): void {
        this.contentful.getMultipleContent('proyectos', 3).subscribe((data => {
            console.log(data);
            this.proyectos = data.items;
        }))
    }

    getToDetail(proyectoId) {
        this.router.navigate(['/proyectos', proyectoId]);
    }

}
