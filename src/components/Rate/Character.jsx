import React from 'react';
import PropTypes from 'prop-types';

const Character = ({
  value,
  index,
  renderWhenFull,
  renderWhenHalf,
}) => {
  const thisValue = value - index;

  return (
    <React.Fragment>
      {thisValue >= 1 ? renderWhenFull : renderWhenHalf}
    </React.Fragment>
  );
};

Character.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  renderWhenFull: PropTypes.node.isRequired,
  renderWhenHalf: PropTypes.node.isRequired,
};

export default Character;
