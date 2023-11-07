import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';

const routes: Routes = [
  {path: "" ,redirectTo :'change' , pathMatch: 'full' },
  {path: "change" , component :ChangepasswordComponent },
  {path: "rest" , component :RestpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
