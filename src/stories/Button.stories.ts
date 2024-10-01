import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button/Button';

const buttonMeta: unknown = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default buttonMeta;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "default"
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary"
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive"
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost"
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link"
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline"
  },
};
