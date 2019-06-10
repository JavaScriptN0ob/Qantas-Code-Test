import React from 'react';
import Character from './Character';
import Circle from '../Icons/Circle';
import CircleHalf from '../Icons/CircleHalf';

const RateCircle = props => (
  <Character
    {...props}
    renderWhenFull={<Circle data-testid="rate-full-circle" />}
    renderWhenHalf={<CircleHalf data-testid="rate-half-circle" />}
  />
);

export default RateCircle;
