import { Component, HostListener, Inject } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "twitter-search";

  showHead: boolean = false;
  showFooter: boolean = false;

  ngOnInit() {
  }
  constructor(@Inject(DOCUMENT) document, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event["url"] == "/login") {
          this.showHead = false;
          this.showFooter = false;
        } else {
          this.showHead = true;
          this.showFooter = true;
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
     if (window.pageYOffset > 200) {
       let element = document.getElementById('mainNav');
        element.classList.add('sticky-header');
       let element2 = document.getElementById('mainNav');
        element2.classList.add('navbar-scrolled');
     } else {
      let element = document.getElementById('mainNav');
        element.classList.remove('sticky-header');
      let element2 = document.getElementById('mainNav');
        element2.classList.remove('navbar-scrolled');
     }
  }
}
