import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-managevenue',
  templateUrl: './managevenue.component.html',
  styleUrls: ['./managevenue.component.css'],
})
export class ManagevenueComponent implements OnInit {
  venues;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAPI('dev/getvenue').subscribe((data) => {
      console.log(data);
      this.venues = data;
    });
  }
}
