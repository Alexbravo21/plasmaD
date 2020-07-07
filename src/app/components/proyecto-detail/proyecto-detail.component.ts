import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.scss']
})
export class ProyectoDetailComponent implements OnInit {

    heroProyecto: string;
    proyecto: any = {};

    constructor(
        private sanitizer: DomSanitizer,
        private contenftul: ContentfulService,
        private route: ActivatedRoute,
        ) {
     }


  ngOnInit(): void {
    const proyectoId = this.route.snapshot.paramMap.get('id');
    this.contenftul.getEntryById(proyectoId).subscribe(data => {
        this.heroProyecto = data.fields.bannerProyecto.fields.file.url;
        this.proyecto.titulo = data.fields.tituloDeProyecto;
        this.proyecto.contenido = this.sanitizer.bypassSecurityTrustHtml(documentToHtmlString(data.fields.descripcinDelProyecto));
    })
  }

}
