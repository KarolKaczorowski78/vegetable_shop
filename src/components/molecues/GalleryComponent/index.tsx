import React, { FC } from 'react';
import { Div, Img, ContentContainer, P } from  './styles';
import H2 from '../../atoms/h2/h2';
import IGalleryComponent from '../../../__types__/IGalleryComponent';

const GalleryComponent: FC<IGalleryComponent> = ({ img, content, title }) => {
  return (
    <Div>
      <Img src={ img } alt="" />
      <ContentContainer>
        <H2>{ title }</H2>
        <P>{ content }</P>
      </ContentContainer>
    </Div>
  )
}

export default GalleryComponent;