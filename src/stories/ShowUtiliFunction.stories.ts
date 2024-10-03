import { ShowUtilFunction } from '@/ShowUtilFunction';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Utils/Utils',
	component: ShowUtilFunction,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ShowUtilFunction>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof ShowUtilFunction>>;

export const removeValueLess: Story = {
	args: {
		input: [1, [2, []], null, 3, undefined, 4, { foo: { value: 1, bar: {} } }],
		utilFunction: 'removeValueLess',
		comment: 'Remove all null, undefined, [] and {} in complex array or object'
	},
	name: 'removeValueLess',
};

export const deepClone: Story = {
	args: {
		input: { a: { b: { c: { d: 1 } } } },
		utilFunction: "deepClone",
		comment: 'Clone value avoid pass by Reference'
	},
	name: 'deepClone',
};
