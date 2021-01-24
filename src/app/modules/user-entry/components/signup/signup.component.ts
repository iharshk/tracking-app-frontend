import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private _request: RequestService
  ) { }

  ngOnInit(): void {
    this.getFormFields();
  }

  getFormFields() {
    // this._request.get(environment.backendUrl)
  }

}
