import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {

  unitId;
  units;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.unitId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getAPI(`dev/getunit?unitId=${this.unitId}`).subscribe((data) => {
      console.log(data);
      this.units = data;
    });
  }



}
