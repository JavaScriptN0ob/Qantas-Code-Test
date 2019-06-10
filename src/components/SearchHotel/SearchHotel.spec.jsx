import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchHotel from './SearchHotel';
import mapCurrencyToSymbol from '../../helpers/mapCurrencyToSymbol';

describe('SearchHotel', () => {
  const data = {
    id: 'cxd650nuyo',
    property: {
      propertyId: 'P107801',
      title: 'Courtyard by Marriott Sydney-North Ryde',
      address: [
        '7-11 Talavera Rd',
        'North Ryde',
      ],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 4.5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe Balcony Room',
      displayPrice: {
        amount: 329.000000000,
        currency: 'AUD',
      },
      savings: {
        amount: 30.000000000,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'NOT_REFUNDABLE',
      },
    },
  };

  afterEach(cleanup);

  test('Details', () => {
    const { getByTestId, queryByTestId } = render((
      <SearchHotel property={data.property} offer={data.offer} />
    ));

    const coverImage = getByTestId('search-hotel-cover-image');
    expect(coverImage.alt).toBe(data.property.title);
    expect(coverImage.src).toBe(data.property.previewImage.url);
    expect(getByTestId('search-hotel-title')).toHaveTextContent(data.property.title);
    expect(getByTestId('search-hotel-address')).toHaveTextContent(data.property.address.join(', '));
    expect(getByTestId('search-hotel-offer-name')).toHaveTextContent(data.offer.name);

    if (data.offer.cancellationOption.cancellationType === 'FREE_CANCELLATION') {
      expect(getByTestId('search-hotel-free-cancellation')).toBeTruthy();
    } else {
      expect(queryByTestId('search-hotel-free-cancellation')).toBeFalsy();
    }

    expect(getByTestId('search-hotel-promotion-title')).toHaveTextContent(data.offer.promotion.title);
  });

  test('Offer', () => {
    const { getByTestId } = render(<SearchHotel property={data.property} offer={data.offer} />);

    expect(getByTestId('search-hotel-offer-heading')).toHaveTextContent(`1 night total (${data.offer.displayPrice.currency})`);
    expect(getByTestId('search-hotel-display-price')).toHaveTextContent(`${mapCurrencyToSymbol(data.offer.displayPrice.currency)}${data.offer.displayPrice.amount}`);

    if (data.offer.savings) {
      expect(getByTestId('search-hotel-savings')).toHaveTextContent(`Save ${mapCurrencyToSymbol(data.offer.savings.currency)}${data.offer.savings.amount}~`);
    }
  });
});
