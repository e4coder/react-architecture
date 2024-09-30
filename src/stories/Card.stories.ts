import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Card } from '../components/Card';
import { Button } from '../components/Button';
import React from 'react';

const meta = {
  title: 'Primetrader/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    raised: 'md',
    // children: Button({children: 'Button', hoverTransition: true})
    children: React.createElement('div', {
      
    }, [
      React.createElement('h1', {}, 'Title'),
      Button({children: 'Button', hoverTransition: true})])
  },
};