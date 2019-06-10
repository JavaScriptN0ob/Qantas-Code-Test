import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OfferHeading from './OfferHeading';
import DisplayPrice from './DisplayPrice';
import Savings from './Savings';
import { Offer as OfferPropTypes } from '../../propTypes/SearchHotel';

const StyledOffer = styled.div`
  display: grid;
  align-self: end;
  grid-gap: 0.5rem;
  grid-template-rows: repeat(2, auto) 1.5rem;
`;

const Offer = ({
  offer: { displayPrice, savings },
}) => (
  <StyledOffer>
    <OfferHeading displayPrice={displayPrice} />
    <DisplayPrice displayPrice={displayPrice} />
    {savings && <Savings savings={savings} />}
  </StyledOffer>
);

Offer.propTypes = {
  offer: PropTypes.shape(OfferPropTypes).isRequired,
};

export default Offer;
