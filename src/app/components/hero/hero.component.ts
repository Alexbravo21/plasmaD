import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    @Input() heroProyecto: string;
    @Input() parentDetector: string;
    heroImage: string;

    constructor(private contentful: ContentfulService) { }

    ngOnInit(): void {
        if(this.parentDetector === 'home'){
            this.contentful.getMultipleContent('heroImages', 1).subscribe((data => {
                this.heroImage = data.items[0].fields.imagenBanner.fields.file.url;
            }))
        }
    }
    ngOnChanges(changes: SimpleChanges){
        if(changes.heroProyecto){
            this.heroImage = this.heroProyecto;
        }
    }


}
