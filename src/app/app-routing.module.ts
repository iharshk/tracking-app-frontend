import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserEntryModule } from './modules/user-entry/user-entry.module';
import { JourneyModule } from './modules/journey/journey.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => UserEntryModule,// "./modules/user-entry/user-entry.module#UserEntryModule",
  },
  {
    path: 'journey',
    loadChildren: () => JourneyModule,
    // canLoad: [AuthGuard]
  },
  {
    path: '**', 
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
