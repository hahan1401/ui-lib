import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { DropdownMenuStory } from './DropdownMenuStory';

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

export const Default: Story = {};
