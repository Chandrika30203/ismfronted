import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  PanelAvailabiltyForm!:FormGroup
  constructor() { 

  }

  ngOnInit(): void {
    this.PanelAvailabiltyForm=new FormGroup({
    PanelId:new FormControl("",Validators.required),
    PanelName:new FormControl("",Validators.required),
    PanelSkill:new FormControl("",Validators.required),
    Date:new FormControl("",Validators.required),
    Time:new FormControl("",Validators.required)
    });
  }

  OnSubmit(): void{
    console.log("Availability Data Added Successfully");
  }
}
