import { MultipleSelect } from '@/components/MultipleSelect';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Component/Multiple select',
	component: MultipleSelect,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MultipleSelect>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof MultipleSelect>>;

export const Default: Story = {};
