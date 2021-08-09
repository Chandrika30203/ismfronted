import { Component, OnInit } from '@angular/core';
import { ImsService } from 'src/app/ims.service';
import { FormControl,FormGroup } from '@angular/forms';
import { InterviewShedule } from '../../modles/interview-shedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shedule-interview',
  templateUrl: './shedule-interview.component.html',
  styleUrls: ['./shedule-interview.component.scss']
})
export class SheduleInterviewComponent implements OnInit {
  ScheduleInterviewform!:FormGroup;
  candidate = [
    { candidateId: 1,currentlevel:0,name: "",skills:""},
  ];
  interviewShedule!:InterviewShedule;
  availableDat=[];
  pannelDetails=[];
  availableTime=[];
  panelID=[];
  selectedObj!:any;
  selectedDate!:any;
  selectedTime!:any;
  selectedPanelId!:any;
  skillId!:any;
  uniquepanelID=[];
  hiringForm!:FormGroup;
  panelavailableID=0;

  constructor(private service:ImsService,private route:Router) { }

  ngOnInit(): void {
    this.service.fetchcandidate().subscribe((data)=>{
      this.candidate=data;
      console.log(data);
    })

  }

onChangeObj(newObj:any) {
  console.log(newObj);
  this.pannelDetails=[];
  this.selectedObj = newObj;
  this.service.set_CANDIDATE_CURRENTLEVEL=this.selectedObj.currentlevel;
  this.getPanel(this.selectedObj.currentlevel)
  console.log(this.selectedObj.currentlevel);
this.skillId=this.selectedObj.skill;
}
onChangedate(availabledate:String):void{
  this.selectedDate=availabledate;
  console.log(this.selectedDate);
}
onChangetime(availableTime:String):void{
  this.selectedTime=availableTime;
  console.log(this.selectedTime);
}


onChangepanel(availablepanel:number):void{
  this.selectedPanelId=availablepanel;
  this.availableDat=[];
  this.availableTime=[];
  this.pannelDetails.forEach(x=>{
    if(x["panelId"]==this.selectedPanelId)
    this.availableDat.push(x["panelavailabledate"]);
    this.availableTime.push(x["panelavailabletime"]);
    console.log(x["panelavailabledate"]);
  })
}



getPanel(curentlevel:number):void{
  this.service.fetchPanel(curentlevel).subscribe((data)=>{
    console.log(data);
    this.pannelDetails=data;
    this.pannelDetails.forEach(x=>{
      this.panelID.push(x["panelId"]);
    })
    this.uniquepanelID=Array.from(new Set(this.panelID));
   
    console.log(this.pannelDetails);
  })

}

sheduleInterview():void{
  this.hiringForm=new FormGroup({
    panelID:new FormControl(this.selectedPanelId),
    interviewDate:new FormControl(this.selectedDate),
    interviewTime:new FormControl(this.selectedTime),
    candidateID:new FormControl(this.selectedObj.candidateId),
    skillID:new FormControl(this.selectedObj.skill)
  })
  this.pannelDetails.forEach(x=>{
    if(x["panelId"]==this.selectedPanelId && x["panelavailabledate"]==this.selectedDate && x["panelavailabletime"]==this.selectedTime)
    {
      console.log("true");
        this.panelavailableID=x["panelavailableID"];
    }
  })
  console.log(this.panelavailableID);
  console.log(this.hiringForm.value);
  this.interviewShedule=this.hiringForm.value;
  console.log(this.interviewShedule);
  this.service.setSheduleInterview(this.interviewShedule).subscribe(data=>{
      console.log(data);
  })
  console.log("sucessful");
  this.hiringForm.removeControl;
  this.route.navigate(["/ims/sheduled"]);
  
}



}
