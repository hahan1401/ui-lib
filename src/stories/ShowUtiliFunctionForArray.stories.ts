import { ShowUtilFunctionForArray } from '@/ShowUtilFunction';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Utils/Array',
	component: ShowUtilFunctionForArray,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ShowUtilFunctionForArray>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof ShowUtilFunctionForArray>>;

export const uniqBy: Story = {
	args: {
		input: '[{foo: 1}, {foo: 2}, {foo: 1}, {foo: 3}]',
		iteratee: '(item) => item.foo',
		utilFunction: "uniqBy",
		comment: 'Creates a duplicate-free version of an array'
	},
	name: 'uniqBy',
};
