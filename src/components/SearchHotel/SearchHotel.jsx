import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Offer as OfferPropTypes, Property } from '../../propTypes/SearchHotel';
import style from '../../style';
import cancellable from './cancellable';
import HotelRating from './HotelRating';
import Offer from './Offer';

const StyledSearchHotel = styled.div`
  --gap: 1rem;

  display: grid;
  grid-template-columns: auto 1fr auto;
  position: relative;
  gap: var(--gap);
  margin-top: var(--gap);

  & ~ & {
    :before {
      content: '';
      border-top: 1px solid ${style.DUSTY_GRAY};
      position: absolute;
      right: 0;
      left: 0;
      top: calc(var(--gap) * -1);
    }
  }
`;

const Banner = styled.div`
  position: absolute;
  left: 0.25rem;
  top: 0.5rem;
  color: ${style.PRIMARY_COLOR};
  background: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
`;

const CoverImage = styled.img`
  --width: 145px;
  --height: 125px;

  width: calc(var(--width) * 1.5);
  height: calc(var(--height) * 1.5);
`;

const Details = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding: 0.5rem;
  grid-template-rows: repeat(2, auto) 1fr;
`;

const Heading = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`;

const Title = styled.h2`
  margin: 0;
  max-width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TitleWithRating = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
`;

const Address = styled.address`
  color: ${style.DUSTY_GRAY};
  font-style: normal;
`;

const OfferName = styled.div`
  color: ${style.PRIMARY_COLOR};
  text-decoration: underline;
`;

const FreeCancellation = styled.div`
  align-self: end;
  color: ${style.RIPTIDE_GREEN};
`;

const SearchHotel = ({
  property: {
    title,
    address,
    previewImage: { url },
    rating,
  },
  offer,
}) => {
  const {
    promotion: { title: promotionTitle },
    name,
    cancellationOption,
  } = offer;

  return (
    <StyledSearchHotel data-testid="search-hotel">
      <CoverImage src={url} alt={title} data-testid="search-hotel-cover-image" />
      <Details>
        <Heading>
          <TitleWithRating>
            <Title data-testid="search-hotel-title">{title}</Title>
            <HotelRating rating={rating} />
          </TitleWithRating>
          <Address data-testid="search-hotel-address">{address.join(', ')}</Address>
        </Heading>
        <OfferName data-testid="search-hotel-offer-name">{name}</OfferName>
        {cancellable(cancellationOption) && (<FreeCancellation data-testid="search-hotel-free-cancellation">Free cancellation</FreeCancellation>)}
      </Details>
      <Offer offer={offer} />
      <Banner data-testid="search-hotel-promotion-title">
        {promotionTitle}
      </Banner>
    </StyledSearchHotel>
  );
};

SearchHotel.propTypes = {
  property: PropTypes.shape(Property).isRequired,
  offer: PropTypes.shape(OfferPropTypes).isRequired,
};

export default SearchHotel;
