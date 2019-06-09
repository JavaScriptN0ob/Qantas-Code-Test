import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import capitalize from '../../helpers/capitalize';

const StyledSort = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  align-items: center;
`;

const Title = styled.strong`
  font-size: large;
`;

const DIRECTION = {
  ASC: 'ASC',
  DESC: 'DESC',
};

function mapDirectionToText(direction) {
  if (!Object.values(DIRECTION).includes(direction)) {
    return 'ERROR: DIRECTION NOT SUPPORTED';
  }

  return {
    [DIRECTION.ASC]: 'low-high',
    [DIRECTION.DESC]: 'high-low',
  }[direction];
}

const SPLIT = '-';

function toValue({ key, direction }) {
  return `${key}${SPLIT}${direction}`;
}

function fromValue(value) {
  const [key, direction] = value.split(SPLIT);

  return { key, direction };
}

const Sort = ({
  items,
  value,
  onChange,
}) => (
  <StyledSort
    templateColumns="1fr auto"
    gap="1rem"
    alignItems="center"
  >
    <Title data-testid="sort-title">Sort by</Title>
    <select value={value} onChange={onChange} data-testid="sort-select">
      {items.map(({ key, directions }) => directions.map((direction) => {
        const thisKey = toValue({ key, direction });

        return (
          <option value={thisKey} key={thisKey} data-testid="sort-option">
            {capitalize(key)}
            &nbsp;
            {mapDirectionToText(direction)}
          </option>
        );
      }))}
    </select>
  </StyledSort>
);

Sort.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    directions: PropTypes.arrayOf(PropTypes.oneOf(Object.values(DIRECTION))),
  })).isRequired,
};

Sort.direction = DIRECTION;
Sort.toValue = toValue;
Sort.fromValue = fromValue;

export default Sort;
