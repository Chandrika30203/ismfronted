import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { HrHomeComponent } from 'src/app/components/hr-home/hr-home.component';
import { PanelComponent } from 'src/app/components/panel/panel.component';
import { ResheduleComponent } from 'src/app/components/reshedule/reshedule.component';
import { ViewSheduleComponent } from 'src/app/components/view-shedule/view-shedule.component';
import { ScheduledInterviewComponent } from 'src/app/components/scheduled-interview/scheduled-interview.component';
import { AdminFormComponent } from 'src/app/components/admin-form/admin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEditSheduledComponent } from 'src/app/components/jobhiring/view-edit-sheduled/view-edit-sheduled.component';
import { JobOpeningComponent } from 'src/app/components/jobhiring/job-opening/job-opening.component';
import { SheduleInterviewComponent } from 'src/app/components/jobhiring/shedule-interview/shedule-interview.component';

const route: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path:"admin" ,component:AdminComponent},
  {path:"hr",component:HrHomeComponent},
  {path:"panel",component:PanelComponent},
  {path:"viewShedule",component:ViewSheduleComponent},
  {path:"adminform",component:AdminFormComponent},{
    path:"jobopening",component:JobOpeningComponent
  },
  {path:"sheduled",component:ViewEditSheduledComponent},
  {path:"sheduleInterview",component:SheduleInterviewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule.forChild(route)
  ]
})
export class ImsmoduleModule { }
//ng g c navbar/panel