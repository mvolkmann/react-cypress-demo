import React from 'react';
import {action} from '@storybook/addon-actions';
import MyButton from '../src/my-button';

export default {title: 'MyButton'};

export const text = () => (
  <MyButton onClick={action('clicked')}>Hello Button</MyButton>
);

export const emoji = () => (
  <MyButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </MyButton>
);
