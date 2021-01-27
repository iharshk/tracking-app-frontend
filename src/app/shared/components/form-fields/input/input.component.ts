import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/shared/interfaces/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  field: FieldConfig;
  labelVissble;
  requiredField = false;
  parentGroup: FormGroup;
  group: FormGroup;
  formArrayValue: any = [];

  constructor() { }

  ngOnInit(): void {
  }

 
}