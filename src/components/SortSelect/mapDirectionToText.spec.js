import mapDirectionToText, { DIRECTION } from './mapDirectionToText';

describe('mapDirectionToText', () => {
  test('ASC', () => {
    const result = mapDirectionToText(DIRECTION.ASC);

    expect(result).toBe('low-high');
  });

  test('DESC', () => {
    const result = mapDirectionToText(DIRECTION.DESC);

    expect(result).toBe('high-low');
  });

  test('NOT SUPPORTED', () => {
    const result = mapDirectionToText('FOO');

    expect(result).toBe('');
  });
});
