import type { Meta, StoryObj } from '@storybook/react';
import "../App.css";
import CommentDisplay from '../components/CommentDisplay';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/CommentDisplay',
  component: CommentDisplay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: "Purpose: A component to display user comments on news articles. It shows the username, comment text, and optionally the user's profile image"
      }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof CommentDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;
export const TextInput: Story = {
    args: {
        username: "TestUsername",
        userComment: "This is ann example of a test user comment where they will be able to write a comment and it will be displayed on the screen",
        userImage: "/person.svg"

    }
};
