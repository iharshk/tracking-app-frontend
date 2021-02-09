import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/shared/interfaces/field.interface';
import { FormGroup } from '@angular/forms';
import { OBSERVABLES } from 'src/app/shared/constant/service.constants';
import { CreateObservablesService } from 'src/app/shared/services/create-observables.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  arrayIndex: any;
  parentGroup: FormGroup;

  constructor(
    private _observableService: CreateObservablesService
  ) { }

  ngOnInit(): void {
  }

  onClick(field ){
    if(OBSERVABLES.hasOwnProperty(field.name)){
      console.log(this.group.value ,this.group.valid, field.name)
      if(field.name == 'signup' && this.group.valid){
        // this._observableService.setSessionMain(field.name, 'signup');
      }
      
    }
  }

}
