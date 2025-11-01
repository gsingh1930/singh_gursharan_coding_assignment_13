import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'test check comp',
    backgroundColor: '#f8f9fa',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'Text not started',
    backgroundColor: '#f8f9fa',
    disabled: true,
  },
};
