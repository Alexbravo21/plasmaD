import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isActive: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    scrollToElement($target) {
        this.isActive = this.isActive ? false : this.isActive;
        if (this.router.url == '/') {
            var element = document.getElementById($target);
            var headerOffset = 80;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        } else {
            console.log($target);
            this.router.navigate([''], { fragment: $target });
        }
    }
    
    activateMenu(){
        this.isActive = !this.isActive ? true : false;
    }

}
