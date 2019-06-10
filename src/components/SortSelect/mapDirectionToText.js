export const DIRECTION = {
  ASC: 'ASC',
  DESC: 'DESC',
};

function mapDirectionToText(direction) {
  if (!Object.values(DIRECTION).includes(direction)) {
    return '';
  }

  return {
    [DIRECTION.ASC]: 'low-high',
    [DIRECTION.DESC]: 'high-low',
  }[direction];
}

export default mapDirectionToText;
