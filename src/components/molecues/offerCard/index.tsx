import React, { FC } from 'react';
import IOfferCard from '../../../__types__/IOfferCard';
import { Container, H2, Img, ButtonStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RedirectToProductsButton from '../redirectToProducts';

const OfferCard: FC<IOfferCard> = ({ icon, img, category }) => {

  return (
    <Container>
      <H2>{ category }</H2>
      <Img src={ img } alt="" />
      <RedirectToProductsButton category={ category } additionalStyle={ ButtonStyle }>
        <span>
          <span>
            Zobacz ofertę
          </span>
          <FontAwesomeIcon icon={ icon } />
        </span>
      </RedirectToProductsButton>
    </Container>
  )
}

export default OfferCard;