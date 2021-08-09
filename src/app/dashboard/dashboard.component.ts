import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
 
  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loginform!:FormGroup;
  userName!:String;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      user:new FormControl("",Validators.required),
      pass:new FormControl("",Validators.required)
      });
    }
  OnSubmit(): void{
    console.log(this.loginform.value);
    this.userName=this.loginform.value.user;
     if(this.userName.includes("admin"))     {
        this.route.navigate(["/ims/adminform"]);
     } 
     else if(this.userName.includes("hr"))
     {
      this.route.navigate(["/ims/jobopening"]);
     }
     else if(this.userName.includes("pl"))
     {
      this.route.navigate(["/ims/panel"]);
     }
  
  }

}
