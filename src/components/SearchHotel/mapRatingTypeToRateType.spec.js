import mapRatingTypeToRateType from './mapRatingTypeToRateType';
import Rate from '../Rate';

describe('mapRatingTypeToRateType', () => {
  test('star', () => {
    const result = mapRatingTypeToRateType('star');

    expect(result).toBe(Rate.type.Star);
  });

  test('self', () => {
    const result = mapRatingTypeToRateType('self');

    expect(result).toBe(Rate.type.Circle);
  });

  test('NOT SUPPORTED', () => {
    const result = mapRatingTypeToRateType('FOO');

    expect(result).toBeFalsy();
  });
});
