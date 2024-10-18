import { ShowUtilFunctionForArray } from '@/ShowUtilFunction';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Utils/Array',
	component: ShowUtilFunctionForArray,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		utilFunction: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof ShowUtilFunctionForArray>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof ShowUtilFunctionForArray>>;

export const uniqBy: Story = {
	args: {
		input: '[{foo: 1}, {foo: 2}, {foo: 1}, {foo: 3}]',
		utilFunction: 'uniqBy',
		comment: 'Creates a duplicate-free version of an array',
		iteratee: 'item => item.foo',
	},
	name: 'uniqBy',
};

export const intersectionBy: Story = {
	args: {
		input: '[[{ x: 1 }], [{ x: 2 }, { x: 1 }]]',
		utilFunction: 'intersectionBy',
		comment: 'Creates a duplicate-free version of an array',
		iteratee: 'item => item.x',
	},
	name: 'intersectionBy',
};
