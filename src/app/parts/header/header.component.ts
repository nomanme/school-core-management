import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  body;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.router.navigate(['login']);
  }

  sidebarCollapse() {
    this.body = document.getElementsByTagName('body')[0];

    if ( this.body.classList.contains('sidebar-collapse') ) {
      this.body.classList.remove('sidebar-collapse');
    }
    else {
      this.body.classList.add('sidebar-collapse');
    }
    
  }

}
