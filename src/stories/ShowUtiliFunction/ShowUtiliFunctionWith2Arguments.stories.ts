import { ShowUtilFunctionWith2Arguments } from '@/ShowUtilFunction';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
	title: 'Utils/Utils',
	component: ShowUtilFunctionWith2Arguments,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		utilFunction: {
			table: {
				disable: true,
			},
		},
		comment: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof ShowUtilFunctionWith2Arguments>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof ShowUtilFunctionWith2Arguments>>;

export const isEqual: Story = {
	args: {
		input1: '[1, [2, [3], [4]], null, 3, undefined, 4, { foo: { value: 1, bar: {} } }]',
		input2: '[1, [2, [3], [4]], null, 3, undefined, 4, { foo: { value: 1, bar: {} } }]',
		utilFunction: 'isEqual',
		comment: 'Deep compare 2 arrays or objects',
	},
	name: 'isEqual',
};
