import { SplashContent } from '@/components/SplashContent';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

const metaData: unknown = {
    title: 'Example/Splash content',
    component: SplashContent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Children'
    },
} satisfies Meta<typeof SplashContent>;

export default metaData;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
type Story = StoryObj<ComponentProps<typeof SplashContent>>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        // children: (`<p>asd</p>`)
    },
};
    