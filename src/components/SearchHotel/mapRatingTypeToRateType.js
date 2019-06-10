import Rate from '../Rate';

function mapRatingTypeToRateType(type) {
  return {
    star: Rate.type.Star,
    self: Rate.type.Circle,
  }[type];
}

export default mapRatingTypeToRateType;
