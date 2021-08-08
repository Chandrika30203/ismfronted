import { Component, OnInit } from '@angular/core';
import { ImsService } from 'src/app/ims.service';
import { JobOpenings } from '../../modles/job-openings';
import { Router} from '@angular/router';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {
  headers = ["Reuirement ID", "Requirement details ","Skills","Starte Date", " Endate Date ", "Action"];
  jobOpeningData!:any;
  constructor(private service:ImsService,private route:Router) { }

  ngOnInit(): void {
      this.service.fetchjobOpenings().subscribe((data)=>{
        this.jobOpeningData=data;
        console.log(this.jobOpeningData);
      })
  }

  shedule(skill:string):void{
      this.service.set_SKILL=skill;
      this.route.navigate(["/ims/sheduleInterview"]);

  }

}
