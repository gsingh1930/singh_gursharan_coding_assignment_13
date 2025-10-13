import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: 'Custom Label', backgroundColor: '#28a745', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Canceled Label', backgroundColor: '#28a745', disabled: true },
};