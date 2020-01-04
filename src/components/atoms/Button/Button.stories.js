import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
  };
  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return (
    <Button color={value} onClick={action('clicked')}>
      Hello Button
    </Button>
  );
};

export const RedButton = () => (
  <Button secondary onClick={action('clicked')}>
    Hello Button
  </Button>
);
