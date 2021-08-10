import { Component, OnInit } from '@angular/core';
import { ImsService } from 'src/app/ims.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {
  headers = ["Requirement ID", "Requirement details ","Required Skill Set","No. of Candidate required","Start Date", " End date"];
  jobOpeningData!:any;
  constructor(private service:ImsService) { }
  

  ngOnInit(): void {
this.service.fetchjobOpenings().subscribe((data)=>{
this.jobOpeningData=data;
});
  }

}
