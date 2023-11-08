import React from "react";
import { useForm } from 'react-hook-form';

import { Button } from '@mui/material'
import { FormGeneratorProps } from "../../types/components/FormGenerator.types";
import DynamicContoller from "./DynamicController";
import DateFnsProvider from "./fields/DateFnsProvider";
import { sortBy } from "lodash";


function FormGenerator({ formConfig, onSubmit, submitStyle }: FormGeneratorProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const separatorStyle = { marginBottom: "15px" };

  return (
    <div className="w-full">
      <DateFnsProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          {sortBy(formConfig, ['order']).map((field) => (
            <div key={field.name}>
              <DynamicContoller field={field} control={control} />
              <div style={separatorStyle} />
            </div>
          ))}
          <Button type='submit' style={submitStyle}>
            Submit
          </Button>
        </form>
      </DateFnsProvider>
    </div >
  );
}

export default FormGenerator;
