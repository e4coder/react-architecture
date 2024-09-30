import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

// import { Card } from '../components/Card';
import { SideNavBar } from '../components';

const meta = {
  title: 'Primetrader/SideNavBad',
  component: SideNavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {}
} satisfies Meta<typeof SideNavBar>;
