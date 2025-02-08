import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode, useState } from 'react';
import { DropdownItem } from '../DropdownItem';
import styles from './styles.module.scss';

export interface MenuItem {
	key: number | string;
	label: string | ReactNode;
	variant?: 'default' | 'secondary';
	children?: MenuItem[];
	renderItem?: (props: { item?: MenuItem; props: { onClick?: () => void; active?: boolean } }) => ReactNode;
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
	onSelect?: (key?: MenuItem['key'], item?: MenuItem) => void;
	closeOnSelect?: boolean;
	data?: MenuItem[];
	renderItem?: (props: { item?: MenuItem; props: { onClick?: () => void; active?: boolean } }) => ReactNode;
	activeKey?: MenuItem['key'];
	setIsShowDropdown?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const DropdownContent = ({
	data,
	variant,
	onSelect,
	renderItem,
	setIsShowDropdown,
	closeOnSelect,
	activeKey: defaultActiveKey,
}: DropdownContentProps) => {
	const [activeKey, setActiveKey] = useState<MenuItem['key'] | undefined>(defaultActiveKey);

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
					onSelect={(key, item) => {
						console.log('onSelect', onSelect);
						if (typeof onSelect === 'function') {
							onSelect?.(key, item);
						} else {
							setActiveKey(key);
						}

						if (closeOnSelect) setIsShowDropdown?.(false);
					}}
					renderItem={renderItem}
					variant={variant}
				/>
			))}
		</div>
	) : (
		<></>
	);
};
