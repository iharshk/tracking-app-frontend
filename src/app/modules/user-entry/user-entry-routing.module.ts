import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserEntryComponent } from './user-entry.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: UserEntryComponent,
    children : [
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
      },
      {
        path: 'login',
        data: { title: "Login" },
        component: LoginComponent,
      },
      {
        path: 'signup',
        data: { title: "Signup" },
        component: SignupComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEntryRoutingModule { }
