import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';


@Component({
  selector: 'app-scheduled-interview',
  templateUrl: './scheduled-interview.component.html',
  styleUrls: ['./scheduled-interview.component.scss']
})
export class ScheduledInterviewComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }
 
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date("2021-08-10")),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]
 
 
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
