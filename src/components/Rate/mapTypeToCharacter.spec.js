import mapTypeToCharacter, { TYPE } from './mapTypeToCharacter';
import RateStar from './Star';
import RateCircle from './Circle';

describe('mapTypeToCharacter', () => {
  test('Star', () => {
    const result = mapTypeToCharacter(TYPE.Star);

    expect(result).toBe(RateStar);
  });

  test('Circle', () => {
    const result = mapTypeToCharacter(TYPE.Circle);

    expect(result).toBe(RateCircle);
  });

  test('NOT SUPPORTED', () => {
    const result = mapTypeToCharacter('FOO');

    expect(result).toBeFalsy();
  });
});
