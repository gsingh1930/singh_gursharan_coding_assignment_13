import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://www.pexels.com/photo/silhouette-photography-of-person-under-starry-sky-1906658',
    alt: 'night sky with stars',
    title: 'this is a hero title example',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://www.pexels.com/photo/concrete-road-between-trees-1563356',
    alt: 'Seconds hand',
    title: 'Disabled Hero',
    disabled: true,
  },
};
