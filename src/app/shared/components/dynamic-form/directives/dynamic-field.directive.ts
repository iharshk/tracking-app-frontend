import {
  ComponentFactoryResolver, Directive, Input,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms"; 
import { InputComponent, ButtonComponent, SelectComponent } from '../../index';
import { FieldConfig } from '../../../interfaces/field.interface'; 

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Input() parentGroup: FormGroup;
  @Input() labelVissble: any;
  @Input() arrayIndex: any;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    this.componentRef.instance.labelVissble = this.labelVissble;
    this.componentRef.instance.arrayIndex = this.arrayIndex;
    this.componentRef.instance.parentGroup = this.parentGroup;
  }

}
