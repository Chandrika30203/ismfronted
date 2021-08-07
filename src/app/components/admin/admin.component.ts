import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminform!:FormGroup
  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
    this.adminform=new FormGroup({
    user:new FormControl("",Validators.required),
    pass:new FormControl("",Validators.required)
    });
  }
OnSubmit(): void{
  console.log(this.adminform.value);
  this.route.navigate(["/ims/adminform"]);
}
}
