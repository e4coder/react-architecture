import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

// import { Card } from '../components/Card';
import { SideNavBar } from '../components';

const meta = {
  title: 'Primetrader/SideNavBar',
  component: SideNavBar,
  parameters: {
    // layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {}
} satisfies Meta<typeof SideNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    routes: [
      { name: "Portfolio", link: "/" },
      { name: "Vaults", link: "/vaults" }
    ]
  }
}