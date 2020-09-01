import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import bulmaCarousel from '../../../../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js';
import { Entry } from 'contentful';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    @Input() heroProyecto: string;
    @Input() parentDetector: string;
    heroImage: string;
    heroImages: Entry<any>[] = [];
    slides: number = 5;
    showCarousel = false;

    constructor(private contentful: ContentfulService) { }

    ngOnInit(): void {
        if (this.parentDetector === 'home') {
            this.contentful.getMultipleContent('heroImages', this.slides).subscribe((data => {
                this.heroImages = data.items;
                console.log(this.heroImages);
                this.heroImage = data.items[0].fields.imagenBanner.fields.file.url;
                setTimeout(() => {
                    this.initiateCarousel();
                }, 500)
            }))
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.heroProyecto) {
            this.heroImage = this.heroProyecto;
        }
    }

    initiateCarousel() {
        // Initialize all elements with carousel class.
        bulmaCarousel.attach('.carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
            pagination: false,
            loop: true,
            infinite: true
        });
        setTimeout(() => {
            this.showCarousel = true;
        }, 50)
    }


}
