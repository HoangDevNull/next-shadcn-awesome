/* eslint-disable no-nested-ternary */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { floatLabelVariants } from './label';
import { Show } from './Utilities';

export const textAreaVariants = cva(
  cn(
    'border-input border placeholder:font-light bg-transparent ring-offset-background peer',
    'focus-visible:ring-transparent focus-visible:border-main-100 flex w-full file:border-0 file:bg-transparent',
    'focus-visible:outline-none read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white rounded-xl'
  ),
  {
    variants: {
      variant: {
        default: '',
        filled: 'bg-background',
        floating: '',
      },
      inputSize: {
        sm: 'min-h-11 px-3 py-2 text-sm rounded-sm',
        default: 'min-h-14 py-7 px-6 text-base rounded-sm',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  }
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  suffix?: any;
  label?: React.ReactNode;
  fullWidth?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, variant = 'default', label, placeholder = ' ', children, fullWidth, inputSize, suffix, id, ...props },
    ref
  ) => {
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        <textarea
          id={id}
          className={cn(textAreaVariants({ variant, inputSize, className }))}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        <Show when={!!label}>
          <label
            htmlFor={id}
            className={cn(floatLabelVariants({ variant: variant === 'floating' ? 'textArea' : 'default' }))}
          >
            {label}
          </label>
        </Show>

        {suffix && <div className="absolute right-[10px] top-1/2 -translate-y-1/2">{suffix}</div>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
