export interface Validator {
    name: string;
    args?: any;
    validations: any;
    message: string;

}
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: any;
    type: string;
    validations?: Validator[];
    minlength?: any;
    maxlength?: any;
    parentClass?: any;
    isHidden?: any;
    id?: any;
    position?: any;
    field_arr?: any;
    otp1: string;
    isMultilines?: any;
    btnClass?:any;
    placeholder?:string;
}
