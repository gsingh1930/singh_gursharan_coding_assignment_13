import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    content: 'cell entry',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled Cell',
    disabled: true
  },
};