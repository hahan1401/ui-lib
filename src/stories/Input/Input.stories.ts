import { Input } from '@/components/Input';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Component/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		disabled: {
			control: 'boolean',
		},
		placeholder: {
			control: 'text',
		},
	},
	args: {
		placeholder: 'Placeholder',
		disabled: false,
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof Input>>;

export const Default: Story = {};
