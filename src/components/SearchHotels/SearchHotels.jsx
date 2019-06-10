import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchHotelPropTypes from '../../propTypes/SearchHotel';
import SearchHotel from '../SearchHotel/SearchHotel';

const StyledSearchHotels = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const SearchHotels = ({
  hotels,
}) => (
  <StyledSearchHotels>
    {hotels.map(({ id, property, offer }) => (
      <SearchHotel
        key={id}
        property={property}
        offer={offer}
      />
    ))}
  </StyledSearchHotels>
);

SearchHotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape(SearchHotelPropTypes)).isRequired,
};

export default SearchHotels;
