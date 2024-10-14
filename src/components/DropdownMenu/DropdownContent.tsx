import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { DropdownItem } from './DropdownItem';

export interface MenuItem {
	key: number | string;
	label: string | ReactNode;
	variant?: 'default' | 'secondary';
}

const dropdownContentVariants = cva('', {
	variants: {
		variant: {
			default: 'bg-background text-foreground',
			secondary: 'bg-background-secondary text-foreground-secondary',
		},
	},
});

interface DropdownContentProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownContentVariants> {
	onSelectItem?: (closeOnSelect: boolean) => void;
	closeOnSelect?: boolean;
	data?: MenuItem[];
}

// const DATA = new Array(5).fill(0).map((_, index) => ({ key: index + 1, label: <p>Option {index + 1}</p> }));
// const DATA = [
// 	{
// 		key: 1,
// 		label: 'Option 1',
// 		children: [
// 			{
// 				key: 10,
// 				label: 'Option 1-1',
// 			},
// 			{
// 				key: 11,
// 				label: 'Option 1-2',
// 			},
// 		],
// 	},
// 	{
// 		key: 2,
// 		label: 'Option 2',
// 	},
// 	{
// 		key: 3,
// 		label: 'Option 3',
// 	},
// 	{
// 		key: 4,
// 		label: 'Option 4',
// 	},
// 	{
// 		key: 5,
// 		label: 'Option 5',
// 	},
// ];

export const DropdownContent = ({ data, variant, onSelectItem, closeOnSelect }: DropdownContentProps) => {
	const [activeKey, setActiveKey] = useState<MenuItem['key'] | undefined>();

	return data && data.length > 0 ? (
		<div className={dropdownContentVariants({ variant, className: 'rounded-lg border border-border' })}>
			{data.map((item) => (
				<DropdownItem
					key={item.key}
					item={item}
					activeKey={activeKey}
					onClickItem={(item) => {
						setActiveKey(item?.key);
						onSelectItem?.(!!closeOnSelect);
					}}
					variant={variant}
				/>
			))}
		</div>
	) : (
		<></>
	);
};
