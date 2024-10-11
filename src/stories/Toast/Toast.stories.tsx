import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import ToastStory from './ToastStory';

const metaData: Meta<typeof ToastStory> = {
	title: 'Component/Toast',
	component: ToastStory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { toastLimit: 5 },
} satisfies Meta<typeof ToastStory>;

export default metaData;

type Story = StoryObj<ComponentProps<typeof ToastStory>>;

export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `
  const ToastStory = () => {
	const { toast } = useToast();
	return (
			<Button
				onClick={() => {
					toast({
						title: 'title',
						description: 'description',
					});
				}}
			>
				Show toast
			</Button>
	);
};`,
				language: 'jsx', // Display the source in JSX
				type: 'auto', // Auto-detect the source code type
			},
		},
	},
};
