import { CSSProperties, HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';

const loadingIndicatorVariants = cva(
	`${styles['lds-ring']}`,
	{
		variants: {
			variant: {
				default: '',
				secondary: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

interface LoadingIndicatorProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof loadingIndicatorVariants> {
	color?: string;
	runnerSize?: string;
	size?: string;
}

export const LoadingIndicator = ({
	className,
	style,
	color,
	runnerSize,
	size,
	variant,
	...props
}: LoadingIndicatorProps) => {
console.log('variant', variant)
	return (
		<div
			className={cn(loadingIndicatorVariants({ variant, className: className }))}
			style={{ '--border-color': color, '--border-width': runnerSize, '--size': size, ...style } as CSSProperties}
			data-variant={variant}
			{...props}
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
