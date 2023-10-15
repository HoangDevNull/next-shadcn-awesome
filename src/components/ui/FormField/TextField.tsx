import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import type { InputProps } from '../input';
import { Input } from '../input';
import { Show } from '../Utilities';

interface Props<T extends FieldValues = FieldValues> extends InputProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  classNameLabel?: string;
  required?: boolean;
}

const TextField = <T extends FieldValues>({
  className,
  classNameLabel,
  control,
  defaultValue,
  label,
  required,
  variant,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <Show when={variant !== 'floating'}>
                {label && (
                  <div className="mb-2 flex items-center">
                    <FormLabel className={classNameLabel}>
                      {label} {required && <span className="text-red-500">*</span>}
                    </FormLabel>
                  </div>
                )}
                <Input {...field} {...props} className={className} />
              </Show>
              <Show when={variant === 'floating'}>
                <Input variant={variant} label={label} {...field} {...props} className={className} />
              </Show>

              <FormMessage className="mt-1 text-xs" />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export { TextField };
