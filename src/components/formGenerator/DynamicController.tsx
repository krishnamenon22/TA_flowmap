/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import {
  TextFieldElement, AutocompleteElement, SelectElement, MultiSelectElement, DateTimePickerElement, DatePickerElement,
  RadioButtonGroup, CheckboxButtonGroup, CheckboxElement, PasswordElement, PasswordRepeatElement, SwitchElement, TimePickerElement, SliderElement, TextareaAutosizeElement
} from "./fields"
import { DynamicControllerProps } from "../../types/components/FormGenerator.types";

function DynamicContoller({ field, control }: DynamicControllerProps) {
  const { type, name, label, isNotFullWidth, options, isMultiSelect, passwordFieldName, sliderMax, sliderMin, textAreaRows, validation, required } = field;
  switch (type) {
    case "textfield":
      return <TextFieldElement name={name} label={label} control={control} fullWidth={!isNotFullWidth} validation={validation} required={required} />;
    case "email":
      return <TextFieldElement name={name} label={label} control={control} fullWidth={!isNotFullWidth} type="email" validation={validation} required={required} />;
    case "numeric":
      return <TextFieldElement name={name} label={label} control={control} fullWidth={!isNotFullWidth} type="number" validation={validation} required={required} />;
    case "textarea":
      return <TextareaAutosizeElement name={name} label={label} control={control} fullWidth={!isNotFullWidth} rows={textAreaRows || 3} validation={validation}
        required={required} />;
    case "dropdown":
      if (isMultiSelect) {
        return <MultiSelectElement name={name} label={label} control={control} fullWidth={!isNotFullWidth} options={options === undefined ? [] : options}
          showCheckbox validation={validation} required={required} />;
      }
      return <SelectElement name={name} label={label} control={control} fullWidth={!isNotFullWidth} options={options} validation={validation} required={required} />;
    case "autocomplete":
      return <AutocompleteElement name={name} label={label} control={control} options={options === undefined ? [] : options}
        multiple={isMultiSelect} required={required} />;
    case "datepicker":
      return <DatePickerElement name={name} label={label} control={control} validation={validation} required={required} />;
    case "datetimepicker":
      return <DateTimePickerElement name={name} label={label} control={control} validation={validation} required={required} />;
    case "timepicker":
      return <TimePickerElement name={name} label={label} control={control} validation={validation} required={required} />;
    case "radiogroup":
      return <RadioButtonGroup name={name} label={label} control={control} options={options === undefined ? [] : options} required={required} />;
    case "checkboxgroup":
      return <CheckboxButtonGroup name={name} label={label} control={control} options={options === undefined ? [] : options} required={required} />;
    case "checkbox":
      return <CheckboxElement name={name} label={label} control={control} required={required} />;
    case "password":
      return <PasswordElement name={name} label={label} control={control} validation={validation} required={required} />;
    case "passwordrepeat":
      return <PasswordRepeatElement name={name} label={label} control={control} validation={validation} required={required}
        passwordFieldName={passwordFieldName === undefined ? "" : passwordFieldName} />;
    case "switch":
      return <SwitchElement name={name} label={label} control={control} required={required} />;
    case "slider":
      return <SliderElement label={label} max={sliderMax} min={sliderMin} name={label} control={control} required={required} />
    default:
      return <></>;
  }
}

export default DynamicContoller;