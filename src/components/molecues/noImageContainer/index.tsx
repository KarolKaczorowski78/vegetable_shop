import React, { FC } from 'react';
import ECategories from '../../../__types__/ECategories';
import { Div } from './styles';
import { faAppleAlt, faCarrot, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const NoImgContainer: FC<{ category: ECategories }> = ({ category }) => {

  const getIcon = (): IconDefinition => {
    switch(category) {
      case ECategories.FRUITS:
      case ECategories.APPLES:
        return faAppleAlt
      case ECategories.VEGS:
      case ECategories.SILAGE:
        return faCarrot
      case ECategories.WEEDS:
      case ECategories.ARTICLES:
        return faSeedling
      default:
        return faAppleAlt
    }
  }

  return (
    <Div>
      <FontAwesomeIcon icon={ getIcon() } />
    </Div>
  )
}

export default NoImgContainer;