import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
// import '../../../src/globals.css';

import { cn } from '@/lib/utils';
import { LoadingIndicator } from '../LoadingIndicator';

const buttonVariants = cva(
	'relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
	loadingComponent?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, children, isLoading, loadingComponent, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={isLoading}
				{...props}
			>
				{loadingComponent ? (
					loadingComponent
				) : (
					<LoadingIndicator
						className={`!absolute h-full w-full transition-all duration-200 ease-linear ${isLoading ? 'top-0' : '-top-full'}`}
						variant={variant === 'default' ? 'secondary' : 'default'}
						size={'20px'}
					/>
				)}
				{children}
			</button>
		);
	},
);
Button.displayName = 'Button';

export { Button };
