import React, { FC } from 'react';
import ICard from '../../../__types__/ICard';
import { Div, Img, H2 } from './styles';

const Card: FC<ICard> = ({ text, img }) => {
  return (
    <Div>
      <Img src={ img } alt="" />
      <H2>{ text }</H2>
    </Div>
  )
}

export default Card;