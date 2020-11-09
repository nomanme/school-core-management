import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  openDropDown = '';
  openSubDropDown = '';
  currentURL = '';
  parts;
  active_parent = '';

  constructor() {
    this.currentURL = window.location.href;
    // this.currentURL = this.currentURL.split("/").pop();
    this.parts = this.currentURL.split("/");
    this.active_parent = this.parts[3];

    if (this.active_parent == 'profile') {
      this.openDropDown='profile-container';
    }
    else if (this.active_parent == 'admin') {
      this.openDropDown='admin-container';
    }
    else if (this.active_parent == 'staff') {
      this.openDropDown='staff-container';
    }
    else if (this.active_parent == 'compliance') {
      this.openDropDown='complience-container';
    }
    else if (this.active_parent == 'course') {
      this.openDropDown='course_site-container';
    }
    else if (this.active_parent == 'teacher') {
      this.openDropDown='teacher-container';
    }
    else if (this.active_parent == 'timetable') {
      this.openDropDown='timetable-container';
    }
    else if (this.active_parent == 'users') {
      this.openDropDown='users-container';
    }
    else {
      this.openDropDown='';
    }
  }

  ngOnInit(): void {
  }

  getDataForDropDown($event: any) {
    // $event.target.classList.add('active');
    // console.log($event.target.getAttribute('data-opener'));
    this.openDropDown = $event.target.getAttribute('data-opener');
    this.openSubDropDown = '';
    // get data for table since we are opening the div to show the body
  }

  removeDataForDropDown($event: any) {
    $event.target.classList.remove('active');
    this.openDropDown = '';
    this.openSubDropDown = '';
    // this.openDropDown = 'hide';
    // remove data for table since we are closing the div to hide the body
  }

  getDataForSubDropDown($event: any) {
    // $event.target.classList.add('active');
    // console.log($event.target.getAttribute('data-opener'));
    this.openSubDropDown = $event.target.getAttribute('data-opener');
    // get data for table since we are opening the div to show the body
  }

  removeDataForSubDropDown($event: any) {
    $event.target.classList.remove('active');
    this.openSubDropDown = '';
    // this.openDropDown = 'hide';
    // remove data for table since we are closing the div to hide the body
  }


}
 