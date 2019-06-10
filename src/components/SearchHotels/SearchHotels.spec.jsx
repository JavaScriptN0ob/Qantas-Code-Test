import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchHotels from './SearchHotels';

describe('SearchHotels', () => {
  const data = [{
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
  }];

  afterEach(cleanup);

  test('hotels', () => {
    const { getAllByTestId } = render(<SearchHotels hotels={data} />);

    const hotels = getAllByTestId('search-hotel');
    expect(hotels.length).toBe(data.length);
  });
});
