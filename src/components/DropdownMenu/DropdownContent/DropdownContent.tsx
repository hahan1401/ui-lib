import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { DropdownItem } from '../DropdownItem';
import styles from './styles.module.scss';

export interface MenuItem {
	key: number | string;
	label: string | ReactNode;
	variant?: 'default' | 'secondary';
	children?: MenuItem[];
}

const dropdownContentVariants = cva('rounded-lg border border-border', {
	variants: {
		variant: {
			default: 'bg-background text-foreground',
			secondary: 'bg-background-secondary text-foreground-secondary',
		},
	},
});

interface DropdownContentProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'>,
		VariantProps<typeof dropdownContentVariants> {
	onSelect?: (closeOnSelect: boolean) => void;
	closeOnSelect?: boolean;
	data?: MenuItem[];
}

export const DropdownContent = ({ data, variant, onSelect, closeOnSelect }: DropdownContentProps) => {
	const [activeKey, setActiveKey] = useState<MenuItem['key'] | undefined>();

	return data && data.length > 0 ? (
		<div
			className={dropdownContentVariants({
				variant,
				className: styles['dropdown-content-wrapper'],
			})}
		>
			{data.map((item) => (
				<DropdownItem
					key={item.key}
					item={item}
					activeKey={activeKey}
					onSelect={(item) => {
						setActiveKey(item?.key);
						onSelect?.(!!closeOnSelect);
					}}
					variant={variant}
				/>
			))}
		</div>
	) : (
		<></>
	);
};
