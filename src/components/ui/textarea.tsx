import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

export const textAreaVariants = cva(
  cn(
    'border-input border placeholder:font-light bg-transparent ring-offset-background peer',
    'focus-visible:ring-transparent focus-visible:border-main flex w-full file:border-0 file:bg-transparent',
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
        default: 'min-h-14 py-4 px-3 text-sm rounded-sm',
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
    {
      className,
      variant = 'default',
      label,
      rows = 5,
      placeholder = ' ',
      children,
      fullWidth,
      inputSize,
      suffix,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <textarea rows={rows} className={cn(textAreaVariants({ variant, inputSize, className }))} ref={ref} {...props} />
    );
  }
);
TextArea.displayName = 'TextArea';

export { TextArea };
