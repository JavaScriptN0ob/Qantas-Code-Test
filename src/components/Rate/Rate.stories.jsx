import React from 'react';
import { storiesOf } from '@storybook/react';
import Rate from './Rate';

storiesOf('Components', module)
  .add('Rate - Star', () => (<Rate type={Rate.type.Star} value={2.5} />))
  .add('Rate - Circle', () => (<Rate type={Rate.type.Circle} value={2.5} />));
