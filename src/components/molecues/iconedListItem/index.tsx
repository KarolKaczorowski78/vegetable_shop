import React, { FC } from 'react';
import IIconedListItem from '../../../__types__/IIconedListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Li } from './styles';

const IconedListItem: FC<IIconedListItem> = ({ icon, text, iconColor }) => {
  return (
    <Li>
      <FontAwesomeIcon icon={ icon } style={{ color: iconColor }} />
      &nbsp;
      { text }
    </Li>
  )
}

export default IconedListItem;