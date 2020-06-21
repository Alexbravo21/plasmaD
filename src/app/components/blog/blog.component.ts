import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    blog: any = {
        img: '/assets/img/blog.jpg'
    }

  constructor() { }

  ngOnInit(): void {
  }

}
