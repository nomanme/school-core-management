import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { AmazingTimePickerService } from 'amazing-time-picker';


@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit {

  getclasstimetable;
  classTimetableId;
  editClassTimetable = {
    startTime: null,
    endTime: null,
  };



  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private atp: AmazingTimePickerService) { }

  ngOnInit(): void {
    this.apiService.getAPI2('dev/getclasstimetable').subscribe((data) => {
      console.log(data);
      this.getclasstimetable = data;
    });
  }
  myFunction($event: any) {
    var rowId = $event.currentTarget.getAttribute('id');

    var startTime = (<HTMLInputElement>document.getElementById("sTime" + rowId)).value;
    // var startDateParts = startDate.split("/");
    // startDate = startDateParts[2] + '-' + startDateParts[0] + '-' + startDateParts[1];

    var endTime = (<HTMLInputElement>document.getElementById("eTime" + rowId)).value;
    // var endtDateParts = endDate.split("/");
    // endDate = endtDateParts[2] + '-' + endtDateParts[0] + '-' + endtDateParts[1];

    this.classTimetableId = rowId
    console.log(startTime + ' ' + this.classTimetableId)
    console.log(endTime + ' ' + this.classTimetableId)



    let datajson = `{"startTime":"${startTime}", "endTime":"${endTime}"}`;
    console.log(datajson);
    this.apiService.postAPI2(`dev/editclasstimetable?classTimetableId=${this.classTimetableId}`, datajson).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/course/class-setup']);
    });
  }


}
