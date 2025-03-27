import type { Meta, StoryObj } from '@storybook/react';
import "../App.css";
import MockDrop from './MockDropdown';
const meta = {
  title: 'Example/Dropdown',
  component: MockDrop,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Purpose: A reusable dropdown component that supports different styles (icons) and is used for selecting search criteria for articles."
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
    toggleDropdown: { action: 'toggled' },
  },
} satisfies Meta<typeof MockDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownComponent: Story = {
    args: {}
};

