import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mapCurrencyToSymbol from '../../helpers/mapCurrencyToSymbol';
import { Price } from '../../propTypes/SearchHotel';

const StyledDisplayPrice = styled.div`
  font-size: xx-large;
  display: grid;
  align-items: top;
  grid-template-columns: auto 1fr;
`;

const Symbol = styled.div`
  font-size: medium;
`;

const DisplayPrice = ({
  displayPrice: { currency, amount },
}) => (
  <StyledDisplayPrice data-testid="search-hotel-display-price">
    <Symbol>{mapCurrencyToSymbol(currency)}</Symbol>
    <span>{amount}</span>
  </StyledDisplayPrice>
);

DisplayPrice.propTypes = {
  displayPrice: PropTypes.shape(Price).isRequired,
};

export default DisplayPrice;
