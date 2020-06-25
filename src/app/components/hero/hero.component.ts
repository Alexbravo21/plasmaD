import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    heroImage : Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit(): void {
      this.contentful.logContent('servicios')
  }

}
