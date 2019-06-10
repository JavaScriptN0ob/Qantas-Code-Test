import React from 'react';
import { storiesOf } from '@storybook/react';
import Star from './Star';
import StarHalf from './StarHalf';
import Circle from './Circle';
import CircleHalf from './CircleHalf';

storiesOf('Icons', module)
  .add('Star', () => (<Star />))
  .add('StarHalf', () => (<StarHalf />))
  .add('Circle', () => (<Circle />))
  .add('CircleHalf', () => (<CircleHalf />));
