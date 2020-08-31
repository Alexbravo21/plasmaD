import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
    nosotros: Entry<any>[] = [];
    nosotrosColor: Array<string> = ['morado', 'amarillo', 'azul', 'verde'];

    constructor(private contentful: ContentfulService) { }

    ngOnInit(): void {
        this.contentful.getMultipleContent('nosotros', 4).subscribe((data => {
            this.nosotros = data.items;
        }))
    }

}
