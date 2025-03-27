import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import "../App.css";
import MockText from './MockText';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/TextField',
  component: MockText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: "Purpose: A reusable text field component that can be used in various parts of the application such as login, sign up, and comment sections."
      }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof MockText>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TextInput: Story = {
    args: {
    }
};
