import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntryComponent } from './user-entry.component';

import { UserEntryRoutingModule } from './user-entry-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module'; 


@NgModule({
  declarations: [UserEntryComponent, SignupComponent, LoginComponent ],
  imports: [
    CommonModule,
    UserEntryRoutingModule,
    SharedModule,
    TranslateModule.forChild({}),
  ],
  exports: [] 
})
export class UserEntryModule { }
