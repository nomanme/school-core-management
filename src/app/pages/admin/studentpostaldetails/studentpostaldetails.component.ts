import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-studentpostaldetails',
  templateUrl: './studentpostaldetails.component.html',
  styleUrls: ['./studentpostaldetails.component.css']
})
export class StudentpostaldetailsComponent implements OnInit {
  StudentPostalDetails;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAPI2('dev/getstudentpostaldetails').subscribe((data) => {
      console.log(data);
      this.StudentPostalDetails = data;
    });
  }
}
