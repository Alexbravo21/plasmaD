import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
    servicios: Entry<any>[] = [];

    constructor(private contentful: ContentfulService) { }

    ngOnInit(): void {
        this.contentful.getMultipleContent('servicios', 4).subscribe((data => {
            this.servicios = data.items;
        }))
    }
}
