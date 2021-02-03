import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant:'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant:'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant:'success',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant:'danger',
  children: 'Danger',
};
