import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mapTypeToCharacter, { TYPE } from './mapTypeToCharacter';

const StyledRate = styled.div`
`;

const Rate = ({
  value,
  type,
  className,
}) => {
  const ThisCharacter = mapTypeToCharacter(type);

  if (!ThisCharacter) {
    return null;
  }

  const characters = [];

  for (let i = 0; i < value; i += 1) {
    characters.push((
      <ThisCharacter value={value} index={i} key={i} />
    ));
  }

  return (
    <StyledRate title={value} data-testid="rate" className={className}>
      {characters}
    </StyledRate>
  );
};

Rate.defaultProps = {
  className: '',
};

Rate.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
};

Rate.type = TYPE;

export default Rate;
