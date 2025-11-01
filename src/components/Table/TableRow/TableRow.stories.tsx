import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: (
      <>
        <td>pen</td>
        <td>2</td>
        <td>5</td>
      </>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <td>car</td>
        <td>240</td>
        <td>15</td>
      </>
    ),
    disabled: true,
  },
};
