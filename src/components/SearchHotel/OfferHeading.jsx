import PropTypes from 'prop-types';
import React from 'react';
import { Price } from '../../propTypes/SearchHotel';

const OfferHeading = ({
  displayPrice: { currency },
}) => (
  <small data-testid="search-hotel-offer-heading">{`1 night total (${currency})`}</small>
);

OfferHeading.propTypes = {
  displayPrice: PropTypes.shape(Price).isRequired,
};

export default OfferHeading;
