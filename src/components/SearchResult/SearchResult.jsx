import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSearchResult = styled.div`
  font-size: large;
`;

const SearchResult = ({
  count,
  location,
}) => (
  <StyledSearchResult data-testid="search-result">
    <strong data-testid="count">{count}</strong>
    &nbsp;
    <i>hotels in</i>
    &nbsp;
    <strong data-testid="location">{location}</strong>
  </StyledSearchResult>
);

SearchResult.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default SearchResult;
