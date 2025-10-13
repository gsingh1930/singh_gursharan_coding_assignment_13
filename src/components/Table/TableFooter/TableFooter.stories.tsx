import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  argTypes: {
    footers: { control: 'object' },
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
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    footers: ['sum', '250', '2'],
    backgroundColor: '#f8f9fa',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    footers: ['sum', '100', '5'],
    backgroundColor: '#f8f9fa',
    disabled: true
  },
};