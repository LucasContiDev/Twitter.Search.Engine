import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  navbarResponsive = "collapse navbar-collapse";

  constructor(private keycloakService: KeycloakService,
    private router: Router) { 
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

  logout() {
      this.keycloakService.logout();
  }

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}
