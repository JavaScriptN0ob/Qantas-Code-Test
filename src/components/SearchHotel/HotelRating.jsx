import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../Rate';
import mapRatingTypeToRateType from './mapRatingTypeToRateType';

const HotelRating = ({
  rating: { ratingValue, ratingType },
}) => (
  <Rate value={ratingValue} type={mapRatingTypeToRateType(ratingType)} />
);

HotelRating.propTypes = {
  rating: PropTypes.shape({
    ratingValue: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};

export default HotelRating;
