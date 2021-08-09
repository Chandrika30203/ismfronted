import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImsService } from 'src/app/ims.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  PanelAvailabiltyForm!:FormGroup
  employeeId:any;
 
  constructor(private route:Router,private service:ImsService) { 

  }

  ngOnInit(): void {
    this.employeeId=sessionStorage.getItem("employeeId");
    sessionStorage.clear();
    this.PanelAvailabiltyForm=new FormGroup({
      panelId:new FormControl(this.employeeId,Validators.required),
      panelavailabledate:new FormControl("",Validators.required),
      panelavailabletime:new FormControl("",Validators.required)
    });
    console.log("usrname");
    console.log(this.employeeId);
  
  

  }

  OnSubmit(): void{
    console.log("Availability Data Added Successfully");
    console.log(this.PanelAvailabiltyForm.value);
    this.service.setPanelAvability(this.PanelAvailabiltyForm.value).subscribe(data=>{
      console.log(data);
    })
    alert("sucessfuly marked the date");
    this.PanelAvailabiltyForm.reset();
  }
}
