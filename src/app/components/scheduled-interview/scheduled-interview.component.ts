import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { ImsService } from 'src/app/ims.service';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduled-interview',
  templateUrl: './scheduled-interview.component.html',
  styleUrls: ['./scheduled-interview.component.scss']
})
export class ScheduledInterviewComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  employeeId:any;
  panelevents:CalendarEvent[]=[];
  panelavailabledate:CalendarEvent[]=[];
  resultpanelEvent:CalendarEvent[]=[];
  PanelAvailabiltyForm!:FormGroup
  a=[];
  
  setView(view: CalendarView) {
    this.view = view;
  }
 
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date("2021-08-12")),
      title: "First event",
      color: {
        primary: "#ad9621",
        secondary: "#de6f6f"
      },
    },
    {
      start: startOfDay(new Date()),
      title: "Second event",
    }
  ]
 
 
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    console.log(events);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }
  constructor(private service:ImsService) { }

  ngOnInit(): void {
    console.log("ngon");
      this.employeeId=sessionStorage.getItem("employeeId");
      this.declearForm();
    this.service.getpanelEvent(this.employeeId).subscribe(data=>{
      if(data.length>0)
      {
        console.log(data);
        this.panelevents=data;

        this.panelevents.forEach(x=>{
          x.start=new Date(x.start);
          x.title="interview sheduled at "+x.title;
          x.color?.primary.fontcolor("red"),
          this.resultpanelEvent.push(x);
        });
        // this.events=this.panelevents;
      }
      this.service.getpanelavailabledate(this.employeeId).subscribe(data=>{
        if(data.length>0)
        {
            this.panelavailabledate=data;
            this.panelavailabledate.forEach(x=>{
              x.start=new Date(x.start);
              x.title="Available at "+x.title;            
              this.resultpanelEvent.push(x);
            })
           this.events=this.resultpanelEvent;
           
        }
      })

    })
  }

  OnSubmit(): void{
    
    this.service.setPanelAvability(this.PanelAvailabiltyForm.value).subscribe(data=>{
      console.log(data);
    })
    alert("sucessfuly marked the date");
    this.ngOnInit();
  }

  declearForm():void{
    this.PanelAvailabiltyForm=new FormGroup({
      panelId:new FormControl(this.employeeId),
      panelavailabledate:new FormControl("",Validators.required),
      panelavailabletime:new FormControl("",Validators.required)
    });

  }

}
