import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    scrollToElement($target) {
        if(this.router.url == '/'){
            document.querySelector(`#${$target}`).scrollIntoView({ behavior: 'smooth' });
        }else{
            console.log($target);
            this.router.navigate([''], { fragment: $target });
        }
    }

}
