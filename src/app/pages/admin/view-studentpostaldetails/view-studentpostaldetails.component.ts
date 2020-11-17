import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-studentpostaldetails',
  templateUrl: './view-studentpostaldetails.component.html',
  styleUrls: ['./view-studentpostaldetails.component.css']
})
export class ViewStudentpostaldetailsComponent implements OnInit {

  studentPostalDetailsId;
  StudentPostalDetails;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.studentPostalDetailsId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI2(`dev/getstudentpostaldetails?studentPostalDetailsId=${this.studentPostalDetailsId}`).subscribe((data) => {
      console.log(data);
      this.StudentPostalDetails = data;
    });
  }


}
