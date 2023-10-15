import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { Icons } from '@/assets/icons';

import type { CalendarProps } from '../calendar';
import { Calendar } from '../calendar';
import { FormControl, FormField, FormItem, FormMessage } from '../form';
import type { InputProps } from '../input';
import { Input } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

interface Props<T extends FieldValues = FieldValues> extends InputProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  calendarProps?: CalendarProps;
}

const DatePickerField = <T extends FieldValues>({
  control,
  name,
  label = 'Choose date',
  required,
  className,
  calendarProps,
  ...props
}: Props<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <Popover modal>
            <PopoverTrigger asChild>
              <FormControl>
                <Input
                  value={field.value ? dayjs(field.value).format('MMM DD, YYYY') : ''}
                  onChange={() => null}
                  label={label}
                  suffix={<Icons.calendar />}
                  {...props}
                />
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                {...calendarProps}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage className="mt-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

export { DatePickerField };
