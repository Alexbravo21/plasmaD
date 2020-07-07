import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    blogPosts: Entry<any>[] = [];

    constructor(private router: Router, private contentful: ContentfulService) { }

    ngOnInit(): void {
        this.contentful.getMultipleContent('blogPost', 4).subscribe((data => {
            console.log(data);
            this.blogPosts = data.items;
        }))
    }

    getToDetail(proyectoId) {
        this.router.navigate(['/blog', proyectoId]);
    }
}
