import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';
import { JourneyComponent } from './journey.component';
import { LocationComponent } from './components/location/location.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [JourneyComponent, LocationComponent],
  imports: [
    CommonModule,
    JourneyRoutingModule,
    SharedModule,
  ]
})
export class JourneyModule { }
