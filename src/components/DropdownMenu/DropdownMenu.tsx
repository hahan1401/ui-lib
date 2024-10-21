import { cn } from '@/lib';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { Button } from '../Button';
import { DropdownContent, MenuItem } from './DropdownContent';

const dropdownMenuVariants = cva('', {
	variants: {
		variant: {
			default: '',
			secondary: '',
		},
		trigger: {
			hover: 'group/parent',
			click: '',
		},
	},
	defaultVariants: {
		trigger: 'hover',
	},
});

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownMenuVariants> {
	trigger?: 'hover' | 'click';
	closeOnSelect?: boolean;
	data?: MenuItem[];
	renderItem?: (props: MenuItem) => ReactNode;
}

export const DropdownMenu = ({
	variant = 'default',
	className,
	trigger,
	closeOnSelect,
	data,
	renderItem,
	...props
}: DropdownMenuProps) => {
	const [isShowDropdown, setIsShowDopdown] = useState(false);

	const onSelectItem = (closeOnSelect: boolean) => {
		if (closeOnSelect) {
			setIsShowDopdown(false);
		}
	};

	return (
		<div
			className={cn(dropdownMenuVariants({ variant, className, trigger }))}
			{...props}
		>
			<div
				onClick={(e) => {
					e.preventDefault();
					setIsShowDopdown((prev) => !prev);
				}}
				onMouseEnter={() => {
					trigger === 'hover' && setIsShowDopdown(true);
				}}
				onMouseLeave={() => {
					trigger === 'hover' && setIsShowDopdown(false);
				}}
				onBlur={() => {
					setIsShowDopdown(false);
				}}
			>
				<Button>Target</Button>
			</div>

			<div
				className={cn(`absolute inline-block min-w-64 ${isShowDropdown ? 'visible z-10' : 'invisible z-[-1]'}`)}
				onMouseEnter={() => {
					trigger === 'hover' && setIsShowDopdown(true);
				}}
				onMouseLeave={() => {
					trigger === 'hover' && setIsShowDopdown(false);
				}}
			>
				<DropdownContent
					variant={variant}
					onSelect={onSelectItem}
					closeOnSelect={closeOnSelect}
					data={data}
				/>
			</div>
		</div>
	);
};
