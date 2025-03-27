import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import "../App.css";
import { Button } from '../components/FormElements';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: "Purpose: A reusable button component that supports different styles and functions based on user interaction. It can be used for various actions such as submitting a form, canceling an action, or navigating to a different page."
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    value: "Submit",
    textColor: "text-white",
    bgColor: "bg-primary",
    handleClick: fn(),
  },
};
export const Secondary: Story = {
  args: {
    value: "Cancel",
    textColor: "text-primary",
    bgColor: "bg-tertiary",
    handleClick: fn(),
  },
};
export const SaveChanges: Story = {
  args: {
    value: "Save Changes",
    width: 160,
    cornerRadius: "rounded-full",
    boldness: "font-bold",
    height: "h-12",
    handleClick: fn(),
  }
};



export const CancelLogOut: Story = {
  args: {
    value: "Cancel",
    width: 100,
    bgColor: "bg-gray-300",
    borderColor: "border-gray-300",
    textColor: "text-black",
    boldness: "font-bold",
    handleClick: fn(),
  }
};
export const YesLogOut: Story = {
  args: {
    value: "Yes",
    width: 100,
    bgColor: "bg-red-600",
    borderColor: "border-red-600",
    textColor: "text-white",
    boldness: "font-bold",
    handleClick: fn(),
  }
};





