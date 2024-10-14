import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { MenuItem } from './DropdownContent';

const dropdownItemVariants = cva('cursor-pointer px-2 py-4 first:rounded-t-lg last:rounded-b-lg', {
	variants: {
		variant: {
			default: 'hover:bg-primary/80',
			secondary: 'hover:bg-secondary/80',
		},
		active: {
			true: '',
			false: '',
		},
	},
	compoundVariants: [
		{ variant: 'default', active: true, className: 'bg-primary text-primary-foreground' },
		{ variant: 'secondary', active: true, className: 'bg-secondary text-secondary-foreground' },
	],
});

interface DropdownItemProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownItemVariants> {
	item?: MenuItem;
	onClickItem?: (item?: MenuItem) => void;
	activeKey?: MenuItem['key'];
}

export const DropdownItem = ({ item, onClickItem, activeKey, variant = 'default' }: DropdownItemProps) => {
	return (
		<div
			className={dropdownItemVariants({
				variant,
				active: activeKey === item?.key,
			})}
			onClick={(e) => {
				e.preventDefault();
				onClickItem?.(item);
			}}
		>
			{item?.label}
		</div>
	);
};
