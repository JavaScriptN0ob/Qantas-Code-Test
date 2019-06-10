import sortHotels from './sortHotels';
import { DIRECTION } from '../SortSelect/mapDirectionToText';

describe('sortHotels', () => {
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
  },
  {
    id: 'mesq6mggyn',
    property: {
      propertyId: 'P107802',
      title: 'Primus Hotel Sydney',
      address: [
        '339 Pitt St',
        'Sydney',
      ],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Primus Hotel Sydney',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 375.000000000,
        currency: 'AUD',
      },
      savings: {
        amount: 28.000000000,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION',
      },
    },
  }];

  test('price, ASC', () => {
    const sort = {
      key: 'price',
      direction: DIRECTION.ASC,
    };

    const newHotels = sortHotels(data, sort);

    expect(newHotels[0]).toBe(data[0]);
    expect(newHotels[1]).toBe(data[1]);
  });

  test('price, DESC', () => {
    const sort = {
      key: 'price',
      direction: DIRECTION.DESC,
    };

    const newHotels = sortHotels(data, sort);

    expect(newHotels[0]).toBe(data[1]);
    expect(newHotels[1]).toBe(data[0]);
  });

  test('NOT SUPPORTED', () => {
    const sort = {
      key: 'location',
      direction: DIRECTION.DESC,
    };

    const newHotels = sortHotels(data, sort);

    expect(newHotels).toEqual(data);
  });
});
