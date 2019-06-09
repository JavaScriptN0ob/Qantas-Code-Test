import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import capitalize from '../../helpers/capitalize';

const StyledSortSelect = styled.div`
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

const SortSelect = ({
  options,
  value,
  onChange,
}) => (
  <StyledSortSelect>
    <Title data-testid="sort-title">Sort by</Title>
    <select
      value={toValue(value)}
      onChange={(event) => {
        const { target: { value: thisValue } } = event;
        const newValue = fromValue(thisValue);

        const newEvent = {
          ...event,
          target: { value: newValue },
        };

        onChange(newEvent);
      }}
      data-testid="sort-select"
    >
      {options.map(({ key, directions }) => directions.map((direction) => {
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
  </StyledSortSelect>
);

const directionPropType = PropTypes.oneOf(Object.values(DIRECTION));

SortSelect.propTypes = {
  value: PropTypes.shape({
    key: PropTypes.string,
    direction: directionPropType,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    directions: PropTypes.arrayOf(directionPropType),
  })).isRequired,
};

SortSelect.direction = DIRECTION;

export default SortSelect;
