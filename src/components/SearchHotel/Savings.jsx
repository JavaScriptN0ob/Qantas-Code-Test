import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Price } from '../../propTypes/SearchHotel';
import style from '../../style';
import mapCurrencyToSymbol from '../../helpers/mapCurrencyToSymbol';

const StyledSavings = styled.div`
  color: ${style.PRIMARY_COLOR};
  font-size: large;
`;

const Savings = ({
  savings: { amount, currency },
}) => (
  <StyledSavings data-testid="search-hotel-savings">
    Save
    &nbsp;
    {mapCurrencyToSymbol(currency)}
    {amount}
    ~
  </StyledSavings>
);

Savings.propTypes = {
  savings: PropTypes.shape(Price).isRequired,
};

export default Savings;
