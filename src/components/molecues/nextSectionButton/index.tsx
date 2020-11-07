import React, { FC } from 'react';
import { Button } from './styles';
import INextSectionButton from '../../../__types__/INextSectionButton';

const NextSectionButton: FC<INextSectionButton> = ({ targetSectionId, text }) => {
  
  const handleClick = () => {
    const targetSection: HTMLElement | null = document.querySelector(`#${targetSectionId}`);
    targetSection && targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <Button onClick={ handleClick }>
      { text }
    </Button>
  )
}

export default NextSectionButton;
