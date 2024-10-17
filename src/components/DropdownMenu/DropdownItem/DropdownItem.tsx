import { DownArrow } from '@/components/ui';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, useState } from 'react';
import { MenuItem } from '../DropdownContent';
import styles from './styles.module.scss';
//first:rounded-t-lg last:rounded-b-lg
const dropdownItemVariants = cva('cursor-pointer py-4 ', {
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
	childrenPaddingX?: number;
}

export const DropdownItem = ({
	item,
	onClickItem,
	activeKey,
	variant = 'default',
	childrenPaddingX = 8,
}: DropdownItemProps) => {
	const paddingX = childrenPaddingX;
	const hasSubmenu = !!item?.children?.length;

	const [isShowSubMenu, setIsShowSubMenu] = useState(false);

	return (
		<>
			<div
				className={dropdownItemVariants({
					variant,
					active: activeKey === item?.key,
				})}
				style={{
					paddingLeft: childrenPaddingX,
					paddingRight: childrenPaddingX,
				}}
				onClick={(e) => {
					e.preventDefault();
					hasSubmenu ? setIsShowSubMenu((prev) => !prev) : onClickItem?.(item);
				}}
			>
				<div className={`flex items-center gap-1 ${styles['item-label']}`}>
					<span>{item?.label}</span>
					{hasSubmenu && (
						<DownArrow
							className='arrow'
							data-open={isShowSubMenu}
						/>
					)}
				</div>
			</div>
			{hasSubmenu && (
				<div
					className={`${styles['dropdown-item-group-wrapper']} transition-all`}
					data-show={isShowSubMenu}
				>
					{item?.children?.map((item) => (
						<DropdownItem
							key={item.key}
							item={item}
							activeKey={activeKey}
							variant={variant}
							childrenPaddingX={paddingX + childrenPaddingX}
							onClickItem={onClickItem}
						/>
					))}
				</div>
			)}
		</>
	);
};
