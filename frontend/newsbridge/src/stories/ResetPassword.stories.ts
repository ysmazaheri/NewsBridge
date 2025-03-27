import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import "../App.css";
import MockResetPassword from './MockResetPassword';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ResetPassword',
  component: MockResetPassword,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: "Purpose: Reset password component that allows users to reset their password by entering their email address."
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
} satisfies Meta<typeof  MockResetPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResetPassword: Story = {
   args: {}
}