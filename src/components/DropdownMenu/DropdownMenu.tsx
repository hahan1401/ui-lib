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

export interface DropdownMenuProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'>,
		VariantProps<typeof dropdownMenuVariants> {
	trigger?: 'hover' | 'click';
	closeOnSelect?: boolean;
	data?: MenuItem[];
	renderItem?: (props: MenuItem) => ReactNode;
	activeKey?: MenuItem['key'];
	open?: boolean;
	onSelect?: (key?: MenuItem['key'], item?: MenuItem) => void;
	targetElement?: () => ReactNode;
}

export const DropdownMenu = ({
	variant = 'default',
	className,
	trigger,
	closeOnSelect,
	data,
	accessKey,
	activeKey,
	renderItem,
	open,
	onSelect,
	targetElement,
	...props
}: DropdownMenuProps) => {
	const [isShowDropdown, setIsShowDropdown] = useState(open);

	return (
		<div
			className={cn(dropdownMenuVariants({ variant, className, trigger }))}
			{...props}
		>
			<div
				onClick={(e) => {
					e.preventDefault();
					setIsShowDropdown((prev) => !prev);
				}}
				onMouseEnter={() => {
					trigger === 'hover' && setIsShowDropdown(true);
				}}
				onMouseLeave={() => {
					trigger === 'hover' && setIsShowDropdown(false);
				}}
				onBlur={() => {
					setIsShowDropdown(false);
				}}
			>
				{targetElement?.() ?? <Button>Target</Button>}
			</div>

			<div
				className={cn(`absolute inline-block min-w-64 ${isShowDropdown ? 'visible z-10' : 'invisible z-[-1]'}`)}
				onMouseEnter={() => {
					trigger === 'hover' && setIsShowDropdown(true);
				}}
				onMouseLeave={() => {
					trigger === 'hover' && setIsShowDropdown(false);
				}}
			>
				<DropdownContent
					variant={variant}
					onSelect={onSelect}
					closeOnSelect={closeOnSelect}
					setIsShowDropdown={setIsShowDropdown}
					data={data}
					activeKey={activeKey}
				/>
			</div>
		</div>
	);
};
