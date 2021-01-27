import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../../interfaces/field.interface';
import { FormGroup } from '@angular/forms';
declare var require: any


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  System: any;
  clonedeep = require('lodash.clonedeep');
  orderList = require('../../../../assets/json/form_field_order.json');

  @Input() fields: FieldConfig[] = [];
  @Input() group: FormGroup;
  @Input() parentComponent: string;
  @Input() parentGroup: FormGroup;
  @Input() labelVissble: any;
  @Input() formLayoutConfig: any;
  @Input() resultConfig: any;


  constructor() { }

  ngOnInit(): void {
    this.formLayoutConfig = this.clonedeep(this.initiateLayoutConfig());
    
    this.resultConfig = this.formLayoutConfig;
    if(this.parentComponent) {
      this.prepareLayoutconfig()

    }
  }

  initiateLayoutConfig() {
    
    return this.formLayoutConfig = this.orderList[this.parentComponent];
  }

  prepareLayoutconfig() {
    
    /* tracing the layout configuration json object */
    Object.entries(this.formLayoutConfig).forEach(entry => {
      let key = entry[0]; //key of field configuration
      let value = entry[1];// value of field configuration

        let formfields = value['fields'];

       
        Object.entries(formfields).forEach(field => {
          console.log(field, typeof field[1]);
          if (typeof field[1] !== 'string') {
            Object.entries(field[1]['fields']).forEach(field1 => {
              this.getFieldResponseConfig(entry, field1, field[0]);
            });
          } else {
            this.getFieldResponseConfig(entry, field, null);
          }
        });
      

    });
  }

  getFieldResponseConfig(entry, field, parentField) {
    let _self = this;
    if(!this.fields) return;
    this.fields.forEach(element => {
      
      if (element.name == field[1]) {
        
          this.resultConfig[entry[0]]['fields'][field[0]] = element;
         
      }

      if (element.field_arr) {
        
        element.field_arr.forEach(res => {
          if (res.name == field[1]) {
            if (parentField) {
              _self.resultConfig[entry[0]]['fields'][parentField]['fields'][field[0]] = res;
            } else {
             _self.resultConfig[entry[0]]['fields'][field[0]] = res;

            }
          }
        })
      }

    });
    
  }

  returnZero() {
    return 0;
  }

  setClass(condition: string, name?: string) {
    let className = '';
    return className;
  }
}
