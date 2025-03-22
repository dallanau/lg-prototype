import type { Meta, StoryObj } from '@storybook/react';
import ContainerCard from './ContainerCard';

const meta: Meta<typeof ContainerCard> = {
  title: 'Molecules/ContainerCard',
  component: ContainerCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContainerCard>;

export const Default: Story = {
  args: {
    containerNumber: 'ABCD1234567',
    status: '进行中',
    type: '40GP',
    weight: '25',
    destination: '上海港',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Completed: Story = {
  args: {
    containerNumber: 'WXYZ9876543',
    status: '已完成',
    type: '20GP',
    weight: '18',
    destination: '宁波港',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const ContainerList: Story = {
  render: () => (
    <div>
      <ContainerCard
        containerNumber="ABCD1234567"
        status="进行中"
        type="40GP"
        weight="25"
        destination="上海港"
      />
      <ContainerCard
        containerNumber="EFGH8901234"
        status="进行中"
        type="40HC"
        weight="28"
        destination="深圳港"
      />
      <ContainerCard
        containerNumber="WXYZ9876543"
        status="已完成"
        type="20GP"
        weight="18"
        destination="宁波港"
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 