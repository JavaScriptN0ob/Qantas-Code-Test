import PORT from './fixtures/PORT';

describe('Qantas Code Test', () => {
  beforeEach(async () => {
    await page.goto(`http://0.0.0.0:${PORT}`);
  });

  it('should display search query (5 hotels in Sydney)', async () => {
    await expect(await page.$('[data-testid="search-result"]')).toMatch('5 hotels in Sydney');
  });
});
