import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = () => {
  return <Button>Hello Button</Button>;
};

export const RedButton = () => <Button secondary>Hello Button</Button>;
