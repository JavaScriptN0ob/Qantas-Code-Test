import PropTypes from 'prop-types';

export const Price = {
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export const Property = {
  propertyId: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.arrayOf(PropTypes.string),
  previewImage: PropTypes.shape({
    url: PropTypes.string,
    caption: PropTypes.string,
    imageType: PropTypes.string,
  }),
  rating: PropTypes.shape({
    ratingValue: PropTypes.number,
    ratingType: PropTypes.string,
  }),
};

export const Offer = {
  promotion: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
  }),
  name: PropTypes.string,
  displayPrice: PropTypes.shape(Price),
  savings: PropTypes.shape(Price),
  cancellationOption: PropTypes.shape({
    cancellationType: PropTypes.string,
  }),
};

export default {
  id: PropTypes.string,
  property: PropTypes.shape(Property),
  offer: PropTypes.shape(Offer),
};
