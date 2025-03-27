import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import "../App.css";
import { Button } from '../components/FormElements';
import { NavbarButton } from '../components/NavigationBar/NavbarButton';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NavbarButton',
  component: NavbarButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: "Purpose: A reusable button component that is used in the Navbar to allow users to navigate between pages."
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
export const Trending: Story = {
    args: {
      value: "Trending",
      textColor: "text-primary",
      bgColor: "bg-tertiary",
      borderColor: "border-transparent",
      img: "/trending.svg",
      height: "h-16",
      handleClick: fn(),
    },
  };
  
  export const Search: Story = {
    args: {
      value: "Search",
      textColor: "text-primary",
      bgColor: "bg-tertiary",
      borderColor: "border-transparent",
      img: "/searchicon.svg",
      height: "h-16",
      handleClick: fn(),
    },
  };

  export const Bookmarked: Story = {
    args: {
      value: "Bookmarked",
      textColor: "text-primary",
      bgColor: "bg-tertiary",
      borderColor: "border-transparent",
      img: "/bookmarkicon.svg",
      height: "h-16",
      handleClick: fn(),
    },
  };