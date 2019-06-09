import capitalize from './capitalize';

describe('capitalize', () => {
  test('valid', () => {
    const result = capitalize('hello');

    expect(result).toBe('Hello');
  });

  test('invalid', () => {
    const result = capitalize(0);

    expect(result).toBe('');
  });
});
