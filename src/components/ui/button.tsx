import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '../../assets/icons';

const buttonVariants = cva(
  'inline-flex items-center active:scale-90 justify-center rounded-full whitespace-nowrap text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 text-primary-foreground  hover:bg-gray-800/90',
        filled:
          'bg-main-100 border-main-100 text-primary-foreground hover:bg-secondary hover:text-main-100 hover:border-main-100 border-2',
        destructive: 'bg-destructive text-destructive-foreground  hover:bg-destructive/90',
        outline:
          'border border-main-100 text-main-100 font-normal bg-background  hover:bg-main-100 hover:text-primary-foreground',
        secondary:
          'bg-main-100 border-main-100 text-primary-foreground  hover:bg-secondary hover:text-neutral-0 hover:border-neutral-0 border-2',
        foreground: 'bg-main-100 border-main-100 text-primary-foreground  hover:bg-secondary hover:text-neutral-0',
        ghost: 'hover:bg-none focus-visible:ring-0 focus-visible:ring-transparent hover:text-main-100',
        link: 'text-main-100 underline-offset-4 font-normal hover:underline',
        light: 'bg-main-100 border-main-100 text-primary-foreground hover:bg-main-110',
        update: 'bg-main-100 border-main-100 text-primary-foreground text-lg font-medium',
      },
      rounded: {
        default: 'rounded-full',
        sm: 'rounded-sm',
        md: 'rounded-md',
        none: 'rounded-none',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-6 text-sm',
        xs: 'h-8 px-3 text-xs',
        st: 'h-12 px-3 text-sm',
        mixin: 'p-0',
        icon: 'h-6 w-h-6 rounded-full active:scale-100',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}
const LoadingIcon = ({ className, size = '1rem' }: { className?: string; size?: string }) => {
  return <Icons.spinner size={size} className={cn('animate-spin ', className)} />;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, type = 'button', size, fullWidth, rounded, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        disabled={props.disabled ?? loading}
        className={cn(fullWidth && 'w-full', buttonVariants({ variant, rounded, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            {loading && <LoadingIcon className="ml-4" />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants, LoadingIcon };
