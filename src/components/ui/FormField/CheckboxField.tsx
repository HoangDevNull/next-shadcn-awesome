import type { ReactNode } from 'react';
import React, { useId } from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Checkbox } from '../checkbox';
import { FormControl, FormField, FormItem, FormMessage } from '../form';
import { Label } from '../label';

interface CheckboxProps<T extends FieldValues = FieldValues> {
  isChecked?: boolean;
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  required?: boolean;
  className?: string;
  labelClassName?: string;
}

const CheckboxField = <T extends FieldValues>({
  control,
  className,
  labelClassName,
  name,
  label,
  required,
  ...props
}: CheckboxProps<T>) => {
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="my-3 flex items-center space-x-2">
            <FormControl>
              <Checkbox id={id} checked={field.value} onCheckedChange={field.onChange} {...props} />
            </FormControl>
            {label && (
              <Label
                htmlFor={id}
                className={cn('cursor-pointer text-xs font-normal leading-none lg:text-sm', labelClassName)}
              >
                {label}
                {required && <span className="text-red-500">*</span>}
              </Label>
            )}
          </div>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export { CheckboxField };
