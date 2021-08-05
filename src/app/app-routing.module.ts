import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImsmoduleModule } from './ims/imsmodule/imsmodule.module';

const routes: Routes = [
  {path:"", redirectTo:'Dashboard', pathMatch:'full'},
  { path: 'Dashboard', component: DashboardComponent },
  {path:'ims',loadChildren: () =>  ImsmoduleModule}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
