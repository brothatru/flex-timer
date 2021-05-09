import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FlexTimer, FlexTimerProps } from '../components/FlexTimer';

export default {
  title: 'Components/FlexTimer',
  component: FlexTimer,
  args: {
    duration: 5000,
  },
  argTypes: {
    progressBarColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FlexTimerProps> = (args) => <FlexTimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  showDuration: false,
};

export const WithDuration = Template.bind({});
WithDuration.args = {
  showDuration: true,
};
