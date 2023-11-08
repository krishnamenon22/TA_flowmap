import { RegisterOptions, ControllerProps } from 'react-hook-form';

export type FieldOption = {
  label: string,
  id: string,
};
export type StringObject = {
  [key: string]: string;
};
export type FormField = {
  name: string,
  label: string,
  type: "textfield" | "email" | "numeric" | "password" | "passwordrepeat" | "textarea" | "dropdown" | "autocomplete"
  | "datepicker" | "datetimepicker" | "timepicker" | "radiogroup" | "checkboxgroup" | "checkbox" | "switch" | "slider",
  order: number,
  options?: FieldOption[],
  defaultValue?: string | FieldOption,
  config?: RegisterOptions;
  isMultiSelect?: boolean;
  isNotFullWidth?: boolean;
  passwordFieldName?: string;
  sliderMin?: number;
  sliderMax?: number;
  textAreaRows?: number;
  required?: boolean;
  validation?: ControllerProps['rules'];
};

export type FormGeneratorProps = {
  formConfig: FormField[]
  onSubmit: (data: any) => void
  submitStyle: StringObject
}

export type DynamicControllerProps = {
  field: FormField
  control: any
}
