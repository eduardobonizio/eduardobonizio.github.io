import React from 'react';

import Input from './Input';

export default {
  title: 'Controls/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    type: {
      control: {
        type: 'select',
        options: [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ],
      },
    },
  },
};

const Template = args => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  type: 'text',
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'text',
};
