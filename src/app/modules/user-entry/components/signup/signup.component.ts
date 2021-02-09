import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { environment } from 'src/environments/environment';
import { FieldConfig } from 'src/app/shared/interfaces/field.interface';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupConfig: FieldConfig[] = [];
  constructor(
    private _request: RequestService,
    private _formService: FormService
  ) { }

  ngOnInit(): void {
    this.getFormFields();
  }

  getFormFields() {
    this._request.get(environment.backendUrl + "signupFields").subscribe((res : any)=> {
      if(res && res.length) {
        this.signupConfig = res.filter(elem => elem.inputType !== 'hidden');
        this.signupForm = this._formService.createControl(this.signupConfig);
        console.log(this.signupForm)
      }
      
    }, err => {
      console.log(err);
    })
  }

  onSubmit () {
    console.log('hhgffdd')
  }

}
