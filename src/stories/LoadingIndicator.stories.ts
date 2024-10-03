import { LoadingIndicator } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Component/Loading indicator',
	component: LoadingIndicator,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LoadingIndicator>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof LoadingIndicator>>;

export const Default: Story = {
	args: {},
};
