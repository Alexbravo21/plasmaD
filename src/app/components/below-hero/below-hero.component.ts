import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
    selector: 'app-below-hero',
    templateUrl: './below-hero.component.html',
    styleUrls: ['./below-hero.component.scss']
})
export class BelowHeroComponent implements OnInit {
    belowHero: string;

    constructor(private contentful: ContentfulService) { }

    ngOnInit(): void {
        this.contentful.getMultipleContent('belowHero', 1).subscribe((data => {
            this.belowHero = data.items[0].fields.texto;
        }))
    }

}
