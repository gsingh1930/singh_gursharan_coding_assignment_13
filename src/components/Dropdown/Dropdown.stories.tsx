import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ['Mansa', 'Wpg', 'albaquerque'],
    placeholder: 'Select a city',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    options: ['Mansa', 'Wpg', 'albaquerque'],
    placeholder: 'Select a city',
    disabled: true
  },
};