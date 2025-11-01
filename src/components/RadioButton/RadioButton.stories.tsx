import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Raadio',
    name: 'radio-city',
    value: 'wpg',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio button',
    name: 'radio-city',
    value: 'albaquerque',
    disabled: true,
  },
};
