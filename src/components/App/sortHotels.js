import { DIRECTION } from '../SortSelect/mapDirectionToText';

function sortHotels(hotels, sort) {
  const { key, direction } = sort;

  const newHotels = [...hotels];

  switch (key) {
    case 'price':
      newHotels.sort((a, b) => {
        if (direction === DIRECTION.ASC) {
          return a.offer.displayPrice.amount - b.offer.displayPrice.amount;
        }

        return b.offer.displayPrice.amount - a.offer.displayPrice.amount;
      });
      break;

    default:
      break;
  }

  return newHotels;
}

export default sortHotels;
