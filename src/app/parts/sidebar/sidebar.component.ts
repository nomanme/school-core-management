import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  openDropDown = '';
  openSubDropDown = '';

  constructor() { }

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
 