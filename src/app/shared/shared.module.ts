import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent, InputComponent, ButtonComponent, SelectComponent } from './components';
import { DynamicFieldDirective } from './components/dynamic-form/directives/dynamic-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    SelectComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forChild({}),
    NgbModule,
  ],
  exports: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
