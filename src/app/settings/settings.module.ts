import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';


@NgModule({
  declarations: [
    ChangepasswordComponent,
    RestpasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
