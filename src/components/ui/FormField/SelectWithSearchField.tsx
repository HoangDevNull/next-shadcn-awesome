import type { ReactNode } from 'react';
import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormField, FormItem, FormMessage } from '../form';
import SelectWithSearch from '../select-with-search';

interface IData {
  label: string;
  value: string;
  image?: string;
  group?: string;
}

interface Props<T extends FieldValues = FieldValues> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  data: IData[];
  inputSize?: 'sm' | 'default';
}

const SelectWithSearchField = <T extends FieldValues>({
  name,
  defaultValue,
  control,
  required,
  data,
  label,
  inputSize,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <SelectWithSearch
            fullWidth={props.fullWidth}
            data={data}
            onValueChange={field.onChange}
            value={field.value}
            disabled={props.disabled}
            label={label}
            inputSize={inputSize}
          />
          <FormMessage className="mt-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

export { SelectWithSearchField };
