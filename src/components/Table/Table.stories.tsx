import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';
import TableFooter from './TableFooter/TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <TableHeader headers={['object', 'price', 'qty']} />
        <tbody>
          <TableRow>
            <TableCell content="pen" />
            <TableCell content="23" />
            <TableCell content="10" />
          </TableRow>
          <TableRow>
            <TableCell content="pencil" />
            <TableCell content="24" />
            <TableCell content="5" />
          </TableRow>
        </tbody>
        <TableFooter footers={['order', '15', '10']} />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableHeader headers={['Name', 'Age', 'City']} />
        <tbody>
          <TableRow>
            <TableCell content="John Doe" />
            <TableCell content="30" />
            <TableCell content="New York" />
          </TableRow>
        </tbody>
        <TableFooter footers={['Total', '1 person', '1 city']} />
      </>
    ),
  },
};
