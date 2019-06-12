import PORT from './fixtures/PORT';
import { results } from '../src/data.json';

async function expectCoverImage(e, src) {
  const thisSrc = await e.$eval('[data-testid="search-hotel-cover-image"]', img => img.src);

  expect(thisSrc).toBe(src);
}

async function expectRate(e, rate) {
  const { ratingValue, ratingType } = rate;

  const testid = {
    self: 'circle',
    star: 'star',
  }[ratingType];

  let fullCounts = ratingValue;
  let halfCounts = 0;

  if (!Number.isInteger(ratingValue)) {
    const [thisFullCounts] = ratingValue.toString().split('.');
    fullCounts = +thisFullCounts;
    halfCounts = 1;
  }

  expect((await e.$$(`[data-testid="rate-full-${testid}"]`)).length).toBe(fullCounts);
  expect((await e.$$(`[data-testid="rate-half-${testid}"]`)).length).toBe(halfCounts);

  const lastDataTestid = await e.$eval('[data-testid="rate"] > *:last-of-type', rate => rate.dataset.testid);

  if (halfCounts) {
    expect(lastDataTestid).toBe(`rate-half-${testid}`);
  }
}

async function expectFreeCancellation(e, cancellationType) {
  if (cancellationType === 'FREE_CANCELLATION') {
    await expect(await e.$('[data-testid="search-hotel-free-cancellation"]')).toMatch('Free cancellation');
  } else {
    expect(await e.$('[data-testid="search-hotel-free-cancellation"]')).toBeFalsy();
  }
}

async function expectSavings(e, savings) {
  if (savings) {
    await expect(await e.$('[data-testid="search-hotel-savings"]')).toMatch(`Save $${savings.amount}~`);
  } else {
    expect(await e.$('[data-testid="search-hotel-savings"]')).toBeFalsy();
  }
}

async function expectHotel(e, hotel) {
  await Promise.all([
    expectFreeCancellation(e, hotel.offer.cancellationOption.cancellationType),
    expectSavings(e, hotel.offer.savings),
    expectCoverImage(e, hotel.property.previewImage.url),
    expectRate(e, hotel.property.rating),
    expect(await e.$('[data-testid="search-hotel-title"]')).toMatch(hotel.property.title),
    expect(await e.$('[data-testid="search-hotel-address"]')).toMatch(hotel.property.address.join(', ')),
    expect(await e.$('[data-testid="search-hotel-offer-name"]')).toMatch(hotel.offer.name),
    expect(await e.$('[data-testid="search-hotel-promotion-title"]')).toMatch(hotel.offer.promotion.title),
    expect(await e.$('[data-testid="search-hotel-offer-heading"]')).toMatch(`1 night total (${hotel.offer.displayPrice.currency})`),
    expect(await e.$('[data-testid="search-hotel-display-price"]')).toMatch(`$${hotel.offer.displayPrice.amount}`),
  ]);
}

async function expectHotels(hotels) {
  await Promise.all((await page.$$('[data-testid="search-hotel"]')).map((e, i) => expectHotel(e, hotels[i])));
}


describe('Qantas Code Test', () => {
  beforeEach(async () => {
    await page.goto(`http://0.0.0.0:${PORT}`);
  });

  it('should display search query (5 hotels in Sydney)', async () => {
    await expect(await page.$('[data-testid="search-result"]')).toMatch('5 hotels in Sydney');
  });

  it('should display sort select', async () => {
    const select = await page.$('[data-testid="sort-select"]');

    await Promise.all([
      expect(await select.$('option[value="price-ASC"]')).toMatch('Price low-high'),
      expect(await select.$('option[value="price-DESC"]')).toMatch('Price high-low'),
    ]);
  });

  it('should display sorted hotels when select price ASC', async () => {
    await page.select('[data-testid="sort-select"]', 'price-ASC');

    const hotels = [...results]
      .sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount);

    await expectHotels(hotels);
  });

  it('should display sorted hotels when select price DESC', async () => {
    await page.select('[data-testid="sort-select"]', 'price-DESC');

    const hotels = [...results]
      .sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount);

    await expectHotels(hotels);
  });
});
