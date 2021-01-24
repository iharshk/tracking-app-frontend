import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyComponent } from './journey.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
  {
    path: '',
    component: JourneyComponent,
    children : [
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
      },
      {
        path: 'location',
        data: { title: "Location" },
        component: LocationComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JourneyRoutingModule { }
