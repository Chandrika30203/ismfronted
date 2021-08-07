import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Validators,FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
  RequirementForm!:FormGroup    
  constructor(
    private route: Router
    
  ){ }
      
  ngOnInit(): void {
    this.RequirementForm=new FormGroup({
      RequirementDetails:new FormControl("",Validators.required),
      SkillSet:new FormControl("",Validators.required),
      StartDate:new FormControl("",Validators.required),
      EndDate:new FormControl("",Validators.required),
      Numberofcandidates:new FormControl("",Validators.required)
  });
}

OnSubmit(): void{
  console.log("Succesfully Added");
}

}
