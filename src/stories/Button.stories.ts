import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button/Button';

const metaData: unknown = {
	title: 'Component/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		isLoading: {
			control: 'boolean',
		},
	},
	args: {
		children: 'Button',
		isLoading: false,
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default metaData;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: 'default',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
	},
};

export const Link: Story = {
	args: {
		variant: 'link',
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
};
