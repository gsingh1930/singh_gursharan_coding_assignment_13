import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
  argTypes: {
    headers: { control: 'object' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    headers: ['object', 'price', 'qty'],
    backgroundColor: '#343a40',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    headers: ['object', 'price', 'qty'],
    backgroundColor: '#343a40',
    disabled: true
  },
};