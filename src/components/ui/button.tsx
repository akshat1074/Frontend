import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex cursor-pointer transition-all duration-200 items-center justify-center font-heading font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      color: {
        primary: 'bg-[var(--color-primary)] text-[var(--color-bright)] hover:bg-[var(--color-type-high)] active:bg-[var(--color-primary-tint)]',
        secondary: 'bg-[var(--color-secondary)] text-[var(--color-gray1)] hover:bg-[var(--color-grey)] active:bg-[var(--color-primary-tint)]',
      },
      size: {
        xs: 'text-[14px] leading-[19.6px] px-[70px] py-[14px] rounded-md',
        sm: 'text-[16px] leading-[22.4px] px-[80px] py-[16px] rounded-md',
        md: 'text-[18px] leading-[25.2px] px-[90px] py-[18px] rounded-md',
        lg: 'text-[20px] leading-[28px] px-[100px] py-[20px] rounded-md',
      },
      variant: {
        normal: 'hover:bg-[var(--color-info)]',
        outline: 'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-tint)] hover:text-[var(--color-bright)]',
        icon: 'p-0 w-[48px] h-[48px] rounded-full justify-center',
        iconText: 'gap-2',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      state: {
        default: '',
        hover: '',
        active: '',
        disabled: 'bg-[var(--color-grey)] text-[var(--color-light-text)] border-none',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        state: 'disabled',
        class: 'bg-[var(--color-grey)] text-[var(--color-light-text)] border-none',
      },
      {
        variant: 'icon',
        color: 'primary',
        class: 'bg-[var(--color-primary)] text-[var(--color-bright)]',
      },
      {
        variant: 'icon',
        color: 'secondary',
        class: 'bg-[var(--color-secondary)] text-[var(--color-gray1)]',
      },
    ],
    defaultVariants: {
      color: 'primary',
      size: 'md',
      variant: 'normal',
      fullWidth: false,
      state: 'default',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: () => void;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color,
      size,
      variant,
      fullWidth,
      state,
      asChild = false,
      leftIcon,
      rightIcon,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ color, size, variant, fullWidth, state }),
          className
        )}
        ref={ref}
        disabled={state === 'disabled' || props.disabled}
        {...props}
        onClick={onClick}
      >
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants }; 