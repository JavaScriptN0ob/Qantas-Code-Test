import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Rate from '../Rate';
import mapRatingTypeToRateType from './mapRatingTypeToRateType';

const StyledRate = styled(Rate)`
  color: #FBCB3B;
`;

const HotelRating = ({
  rating: { ratingValue, ratingType },
}) => (
  <StyledRate value={ratingValue} type={mapRatingTypeToRateType(ratingType)} />
);

HotelRating.propTypes = {
  rating: PropTypes.shape({
    ratingValue: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};

export default HotelRating;
