import RateStar from './Star';
import RateCircle from './Circle';

export const TYPE = {
  Star: 'Star',
  Circle: 'Circle',
};

function mapTypeToCharacter(type) {
  return {
    [TYPE.Star]: RateStar,
    [TYPE.Circle]: RateCircle,
  }[type];
}

export default mapTypeToCharacter;
