import { MenuItem } from '@/components/DropdownMenu/DropdownContent';
import { ComponentProps } from 'react';
import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';

type DropdownMenuProps = ComponentProps<typeof DropdownMenu>;

// const DATA = [
// 	{
// 		key: 1,
// 		label: 'Option 1',
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

const DATA: MenuItem[] = [
	{
		key: 1,
		label: 'Option 1',
		children: [
			{
				key: 1.1,
				label: 'Option 1-1',
				children: [
					{
						key: '1.1.1',
						label: 'Option 1-1-1',
					},
					{
						key: '1.1.2',
						label: 'Option 1-1-2',
					},
				],
			},
			{
				key: 11,
				label: 'Option 1-2',
			},
		],
	},
	{
		key: 2,
		label: 'Option 2',
	},
	{
		key: 3,
		label: 'Option 3',
	},
	{
		key: 4,
		label: 'Option 4',
	},
	{
		key: 5,
		label: 'Option 5',
	},
] as MenuItem[];

export const DropdownMenuStory = ({ data = DATA, trigger, closeOnSelect, variant, ...props }: DropdownMenuProps) => {
	return (
		<div className='h-[50vh]'>
			<DropdownMenu
				trigger={trigger}
				closeOnSelect={closeOnSelect}
				variant={variant}
				data={data}
				{...props}
			/>
		</div>
	);
};
