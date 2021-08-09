import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,Validators,FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JobOpenings } from '../modles/job-openings';
import { JobOpeningsSkills } from '../modles/job-openings-skills';
import { ImsService } from 'src/app/ims.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {
  bgimageadmin:string = "assets/images/dataentry.jpg";
  RequirementForm!:FormGroup   
  skillSet:Array<string>=[];
  jobOpenings!:JobOpenings;
  skillSets = [
    { skillid: 1, skill: "java" },
  ];
  constructor(
    private route: Router,
    private service:ImsService
    
  ){ }
      
  ngOnInit(): void {
    this.getskills();
    this.RequirementForm=new FormGroup({
      requirementDetails:new FormControl("",Validators.required),
      skillId:new FormControl(0,Validators.required),
      startDate:new FormControl("",Validators.required),
      endDate:new FormControl("",Validators.required),
      noOfCandidates:new FormControl("",Validators.required)

  });
}

// extractSkill(skills:String):void{

//   console.log("extractSkill")
//   let result="";
//   console.log(skills);
//   for(let i=0;i<skills.length;i++)
//   {
//       if(skills[i]==",")
//       {
//         this.skillSet.push(result);
//         console.log("result"+result);
//         result="";
//       }
//       else {
//         result+=skills[i];
//       }
//       if(skills[i]==skills.charAt(skills.length-1))
//       {
//         this.skillSet.push(result);
//       }

//       console.log("extractSkill"+skills[i]);
//   }
// }

 
OnSubmit(): void{
 // this.extractSkill(this.RequirementForm.value.SkillSet);
  // console.log(this.RequirementForm.value);
  // console.log(this.skillSet);
  // console.log("Succesfully Added");
  // this.jobOpenings=new FormGroup({
  //   requirementDetails:new FormControl(this.RequirementForm.get("requirementDetails")?.value),
  //   startDate:new FormControl(this.RequirementForm.get("startDate")?.value),
  //   endDate:new FormControl(this.RequirementForm.get("endDate")?.value),
  //   noOfCandidates:new FormControl(this.RequirementForm.get("noOfCandidates")?.value)
  // }).value
  // this.jobOpenings.adminskillset=this.skillSet.map((str) => ({ "skills": str}));
  // console.log("job openings");
  // console.log(this.jobOpenings);
  // this.savedata(this.jobOpenings);
  this.jobOpenings=this.RequirementForm.value;
  console.log(this.RequirementForm.value);
  this.savedata(this.jobOpenings);
 
  this.skillSet=[];
  

}
savedata(data:any)
{
  this.service.saveJobOpenings(data).subscribe((data)=>{
      console.log(data);
  })
}

getskills():void
{
    this.service.fetchSkills().subscribe((data)=>{
      this.skillSets=data;
      console.log(data);
    })
}

}
