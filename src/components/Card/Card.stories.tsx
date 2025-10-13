import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Info card',
    content: 'Crd is a flexible and extensible content container.',
    backgroundColor: '#ffffff',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    title: 'card not working',
    content: 'Card is disabled. Please try again later.',
    backgroundColor: '#ffffff',
    disabled: true
  },
};