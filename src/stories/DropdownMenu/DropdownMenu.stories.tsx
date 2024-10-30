import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { DropdownMenuStory } from './DropdownMenuStory';
import { Button } from '@/components';

const metaData: Meta<typeof DropdownMenuStory> = {
	title: 'Component/Dropdown menu',
	component: DropdownMenuStory,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'secondary'],
		},
		trigger: {
			control: 'select',
			options: ['hover', 'click'],
		},
	},
	args: {
		trigger: 'hover',
		closeOnSelect: false,
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenuStory>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof DropdownMenuStory>>;

export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `
const DATA = [
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
]
<DropdownMenu
	data={DATA}
/>`,
				language: 'jsx', // Display the source in JSX
				type: 'auto', // Auto-detect the source code type
			},
		},
	},
};

export const Custom: Story = {
	parameters: {
		docs: {
			source: {
				code: `
const DATA = [
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
]
<DropdownMenu
	data={DATA}
	renderItem={({item, props}) => <YourOwnComponent item={item} {...props} />}
	targetElement: () => <Button>Custom target & dropdown</Button>
/>`,
				language: 'jsx', // Display the source in JSX
				type: 'auto', // Auto-detect the source code type
			},
		},
	},
	args: {
		targetElement: () => <Button>Custom target & dropdown</Button>
	}
};
