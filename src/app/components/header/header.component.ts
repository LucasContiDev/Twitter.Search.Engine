import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  navbarResponsive = "collapse navbar-collapse";

  constructor() { 
  }

  ngOnInit() {
  }

  collapseHeader() {
    console.log(this.isCollapsed)
    if (this.isCollapsed == true) {
      this.navbarResponsive = "collapse navbar-collapse show";
      this.isCollapsed = false;
    }
    else{
      this.navbarResponsive = "collapse navbar-collapse";
      this.isCollapsed = true;
    }
  }

}
