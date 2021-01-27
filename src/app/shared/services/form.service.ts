import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private fb: FormBuilder
  ) { }

  /**
* function to create form controls
* @param fields 
*/
  createControl(fields) {
    const group = this.fb.group({});

    fields.forEach(field => {
       
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [] )
      );
      group.addControl(field.name, control);
      
    });
    return group;
  }

  bindValidations(validations: any ) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        if (!isArray(valid.validations)) {
          valid.validations = valid.validations.replace(/^\/|\/$/g, "");
        }
        valid.name == "pattern" ? (validList.push(Validators.pattern(valid.validations))) :
          (valid.args) ? (validList.push(Validators[valid.validations](valid.args))) :
            (validList.push(Validators[valid.validations]));

            if(valid.name == "min"){
              validList.push(Validators.min(valid.validations));
            }
            if(valid.name == "max"){
              validList.push(Validators.max(valid.validations));
            }
      });
      
      return Validators.compose(validList);
    }
    return null;
  }
}
