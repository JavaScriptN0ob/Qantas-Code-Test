import mapCurrencyToSymbol from './mapCurrencyToSymbol';

describe('mapCurrencyToSymbol', () => {
  test('AUD', () => {
    const symbol = mapCurrencyToSymbol('AUD');

    expect(symbol).toBe('$');
  });
});
