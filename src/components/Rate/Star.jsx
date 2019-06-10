import React from 'react';
import Character from './Character';
import Star from '../Icons/Star';
import StarHalf from '../Icons/StarHalf';

const RateStar = props => (
  <Character
    {...props}
    renderWhenFull={<Star data-testid="rate-full-star" />}
    renderWhenHalf={<StarHalf data-testid="rate-half-star" />}
  />
);

export default RateStar;
