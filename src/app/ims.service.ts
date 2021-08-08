import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOpenings } from './components/modles/job-openings';
import { ThrowStmt } from '@angular/compiler';
import { InterviewShedule } from './components/modles/interview-shedule';

@Injectable({
  providedIn: 'root'
})
export class ImsService {
set_SKILL="";
set_CANDIDATE_CURRENTLEVEL=""

GET_CANDIDATE="/ims/getallCandidate/";
SET_JOBOPENINGS="/ims/saveAdminDetails";
GET_JOBOPENINGS="/ims/getAdminrecords";
GET_SKILLS="/ims/getskills";
GET_PANEL_AVALIBILITY="/ims/pannelavailable/";
SET_SHEDULEINTERVIEW="/ims/setsheduleInterviewdetail";
GET_SHEDULEDINTERVIEW="/ims/getallsheduledInterview";

  constructor(private http:HttpClient) { }

  saveJobOpenings(data:any):Observable<any>{
    console.log("service");
    console.log(data);
      return this.http.post(this.SET_JOBOPENINGS,data);
  }

  fetchjobOpenings():Observable<any>{
    return this.http.get(this.GET_JOBOPENINGS);
  }


  fetchSkills():Observable<any>{
    return this.http.get(this.GET_SKILLS);
  }


  fetchcandidate():Observable<any>{
    return this.http.get(this.GET_CANDIDATE+this.set_SKILL);
  }

  fetchPanel(level:number):Observable<any>{
    return this.http.get(this.GET_PANEL_AVALIBILITY+this.set_SKILL+"/"+level);
  }

  setSheduleInterview(data:any):Observable<any>{
    return this.http.post(this.SET_SHEDULEINTERVIEW,data);
  }

  getallsheduledInterview():Observable<any>{
    return this.http.get(this.GET_SHEDULEDINTERVIEW);
  }
}
