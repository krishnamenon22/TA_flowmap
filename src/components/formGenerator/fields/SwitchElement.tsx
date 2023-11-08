import React from 'react'
import { FieldValues, Control, Controller, Path } from 'react-hook-form'
import {
  FormControlLabel,
  FormControlLabelProps,
  Switch,
  SwitchProps,
} from '@mui/material'

type IProps = Omit<FormControlLabelProps, 'control'>

export type SwitchElementProps<T extends FieldValues> = IProps & {
  name: Path<T>
  control?: Control<T>
  switchProps?: SwitchProps
}

export default function SwitchElement<TFieldValues extends FieldValues>({
  name,
  control,
  switchProps,
  ...other
}: SwitchElementProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch {...switchProps} {...field} checked={!!field.value} />
          }
          {...other}
        />
      )}
    />
  )
}
