import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { HrHomeComponent } from 'src/app/components/hr-home/hr-home.component';
import { PanelComponent } from 'src/app/components/panel/panel.component';
import { ResheduleComponent } from 'src/app/components/reshedule/reshedule.component';
import { ViewSheduleComponent } from 'src/app/components/view-shedule/view-shedule.component';
import { ScheduledInterviewComponent } from 'src/app/components/scheduled-interview/scheduled-interview.component';


const route: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path:"admin" ,component:AdminComponent},
  {path:"hr",component:HrHomeComponent},
  {path:"panel",component:PanelComponent},
  {path:"viewShedule",component:ViewSheduleComponent}
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(route)
  ]
})
export class ImsmoduleModule { }
