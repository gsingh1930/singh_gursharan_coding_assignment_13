import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://www.pexels.com/photo/concrete-road-between-trees-1563356',
    alt: 'Road Image',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://www.pexels.com/photo/concrete-road-between-trees-1563356',
    alt: 'Disabled image',
    disabled: true
  },
};