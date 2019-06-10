export const AUD = 'AUD';

function mapCurrencyToSymbol(currency) {
  return {
    [AUD]: '$',
  }[currency];
}

export default mapCurrencyToSymbol;
