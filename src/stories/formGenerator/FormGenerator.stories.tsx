import type { Meta, StoryObj } from "@storybook/react";
import FormGenerator from "../../components/formGenerator";
import { FieldOption, FormField } from "../../types/components/FormGenerator.types";


const options: FieldOption[] = [{
  id: 'one',
  label: 'One'
}, {
  id: 'two',
  label: 'Two'
}, {
  id: 'three',
  label: 'Three'
}];

const formConfig: FormField[] = [
  {
    name: "name",
    label: "Name with validation",
    type: "textfield",
    order: 2,
    validation: {
      required: {
        value: true, message: "Please enter your name"
      },
      maxLength: {
        value: 11, message: "Maximum of 11 characters are allowed"
      },
      minLength: {
        value: 5, message: "Minimum of 5 characters are required"
      },
    }
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    order: 1,
    required: true,
  },
  {
    name: "number",
    label: "Age with validation",
    type: "numeric",
    order: 3,
    validation: {
      required: {
        value: true, message: "Please enter your age"
      },
      max: {
        value: 100, message: "Maximum age is 100 years"
      },
      minLength: {
        value: 20, message: "Minimum age is 20 years"
      },
    }
  },
  {
    name: "password",
    label: "Password with validation",
    type: "password",
    order: 4,
    validation: {
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,14})$/,
        message: "Password should contain atleast one charecter in uppercase, lowercase, special character and can be between 8-14 characters"
      }
    }
  },
  {
    name: "password_repeat",
    label: "Repeat Password",
    type: "passwordrepeat",
    passwordFieldName: "password",
    order: 5,
  },
  {
    name: "textarea",
    label: "Textarea",
    type: "textarea",
    textAreaRows: 5,
    order: 6,
  },
  {
    name: "select",
    label: "Select",
    type: "dropdown",
    options,
    isMultiSelect: false,
    order: 7,
  },
  {
    name: "select_multiple",
    label: "Select Multiple",
    type: "dropdown",
    options,
    isMultiSelect: true,
    order: 8,
  },
  {
    name: "auto",
    label: "Autocomplete",
    type: "autocomplete",
    options,
    isMultiSelect: false,
    order: 9,
  },
  {
    name: "auto_multiple",
    label: "Autocomplete Multiple",
    type: "autocomplete",
    options,
    isMultiSelect: true,
    order: 10,
  },
  {
    name: "time",
    label: "Time Picker",
    type: "timepicker",
    order: 11,
  },
  {
    name: "date",
    label: "Date",
    type: "datepicker",
    order: 12,
  },
  {
    name: "datetime",
    label: "Date Time Picker",
    type: "datetimepicker",
    order: 13,
  },
  {
    name: "checkbox_single",
    label: "Single Check",
    type: "checkbox",
    order: 14,
  },
  {
    name: "radio",
    label: "Radio Group",
    type: "radiogroup",
    options,
    order: 15,
  },
  {
    name: "checkbox",
    label: "Checkbox Group",
    type: "checkboxgroup",
    options,
    order: 16,
  },
  {
    name: "switch",
    label: "Switch",
    type: "switch",
    order: 17,
  },
  {
    name: "slider",
    label: "Slider",
    type: "slider",
    sliderMax: 1000,
    sliderMin: 100,
    order: 18,
  },
]

const onFormSubmit = (data: any) => {
  console.log(data);
  // Handle form submission logic
};

const meta = {
  title: "FormGenerator/AllFields",
  component: FormGenerator,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FormGenerator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    formConfig,
    onSubmit: onFormSubmit,
    submitStyle: {},
  }
};

