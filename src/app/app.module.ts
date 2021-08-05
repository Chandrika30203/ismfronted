import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { PanelComponent } from './components/panel/panel.component';
import { ViewSheduleComponent } from './components/view-shedule/view-shedule.component';
import { HrHomeComponent } from './components/hr-home/hr-home.component';
import { ScheduledInterviewComponent } from './components/scheduled-interview/scheduled-interview.component';
import { ResheduleComponent } from './components/reshedule/reshedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    PanelComponent,
    ViewSheduleComponent,
    HrHomeComponent,
    ScheduledInterviewComponent,
    ResheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
