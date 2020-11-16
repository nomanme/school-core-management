import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  openDropDown = '';
  openSubDropDown = '';
  currentURL = '';
  parts;
  active_parent = '';
  active_slug = '';
  classList = '';

  constructor() {
    this.currentURL = window.location.href;
    this.active_slug = this.currentURL.split('/').pop();
    this.parts = this.currentURL.split('/');
    this.active_parent = this.parts[3];
    console.log(this.active_slug);

    if (this.active_parent == 'profile') {
      this.openDropDown = 'profile-container';
    } else if (this.active_parent == 'admin') {
      this.openDropDown = 'admin-container';

      if (
        this.active_slug == 'college-info' ||
        this.active_slug == 'list-student-enrolment' ||
        this.active_slug == 'create-student-enrolment' ||
        this.active_slug == 'overseas-student-health' ||
        this.active_slug == 'offer-document-checklist' ||
        this.active_slug == 'agent-document' ||
        this.active_slug == 'edit-agent-status' ||
        this.active_slug == 'country-nationality-info' ||
        this.active_slug == 'edit-language-info' ||
        this.active_slug == 'certificateid-format' ||
        this.active_slug == 'result-grade' ||
        this.active_slug == 'invention-strategy' ||
        this.active_slug == 'system-field-setup' ||
        this.active_slug == 'checklist-setup' ||
        this.active_slug == 'custom-fields' ||
        this.active_slug == 'additional-email' ||
        this.active_slug == 'assessment-due-date'
      ) {
        this.openSubDropDown = 'admin_configuration-container';
      } else if (
        this.active_slug == 'manage-study-periods' ||
        this.active_slug == 'manage-semester-division' ||
        this.active_slug == 'course-calender-type'
      ) {
        this.openSubDropDown = 'admin_manage_calender-container';
      } else if (
        this.active_slug == 'add-contact' ||
        this.active_slug == 'manage-contract-schedule' ||
        this.active_slug == 'course-site'
      ) {
        this.openSubDropDown = 'admin_manage_contact-container';
      } else if (
        this.active_slug == 'list-venue' ||
        this.active_slug == 'create-venue' ||
        this.active_slug == 'list-venueroom' ||
        this.active_slug == 'create-venueroom'
      ) {
        this.openSubDropDown = 'admin_training_room-container';
      } else if (
        this.active_slug == 'create-permission-group' ||
        this.active_slug == 'set-user-permission' ||
        this.active_slug == 'page-permission-setup'
      ) {
        this.openSubDropDown = 'admin_setup_permission-container';
      } else if (
        this.active_slug == 'manage-system-reports' ||
        this.active_slug == 'update-report'
      ) {
        this.openSubDropDown = 'admin_manage_report-container';
      } else if (
        this.active_slug == 'service-facility-setup' ||
        this.active_slug == 'service-details' ||
        this.active_slug == 'service-provider'
      ) {
        this.openSubDropDown = 'admin_service_setup-container';
      }
    } else if (this.active_parent == 'staff') {
      this.openDropDown = 'staff-container';
    } else if (this.active_parent == 'compliance') {
      this.openDropDown = 'complience-container';
    } else if (this.active_parent == 'course') {
      this.openDropDown = 'course_site-container';
    } else if (this.active_parent == 'teacher') {
      this.openDropDown = 'teacher-container';
    } else if (this.active_parent == 'timetable') {
      this.openDropDown = 'timetable-container';
    } else if (this.active_parent == 'users') {
      this.openDropDown = 'users-container';
    } else {
      this.openDropDown = '';
    }
  }

  ngOnInit(): void {
    const current = document.getElementsByClassName(this.active_slug)[0];
    current.classList.add('current');
  }

  getDataForDropDown($event: any) {
    // $event.target.classList.add('active');
    // console.log($event.target.getAttribute('data-opener'));
    if (this.openDropDown && $event.target.parentElement.classList.contains('active')) {
      this.openDropDown = '';
      $event.target.parentElement.classList.remove('active');
    }
    else {
      this.openDropDown = $event.currentTarget.getAttribute('data-opener');
    }
    this.openSubDropDown = '';
    // get data for table since we are opening the div to show the body
    console.log('here');
    
  }

  removeDataForDropDown($event: any) {
    $event.currentTarget.classList.remove('active');
    this.openDropDown = '';
    this.openSubDropDown = '';
    // this.openDropDown = 'hide';
    // remove data for table since we are closing the div to hide the body
  }

  getDataForSubDropDown($event: any) {
    // $event.target.classList.add('active');
    // console.log($event.target.getAttribute('data-opener'));
    
    if (this.openSubDropDown && $event.target.parentElement.classList.contains('active')) {
      this.openSubDropDown = '';
      $event.target.parentElement.classList.remove('active');
    }
    else {
      this.openSubDropDown = $event.currentTarget.getAttribute('data-opener');
    }
    // get data for table since we are opening the div to show the body
  }

  removeDataForSubDropDown($event: any) {
    $event.currentTarget.classList.remove('active');
    this.openSubDropDown = '';
    // this.openDropDown = 'hide';
    // remove data for table since we are closing the div to hide the body
  }

  // sidebarOpener($event: any) {
  //   this.openDropDown = $event.target.getAttribute('data-opener');
  //   this.openSubDropDown = '';
  //   // console.log(this.drops.nativeElement.html);
  // }
}
