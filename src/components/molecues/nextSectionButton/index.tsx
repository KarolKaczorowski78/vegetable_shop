import React, { FC } from 'react';
import { Button } from './styles';
import INextSectionButton from '../../../__types__/INextSectionButton';

const NextSectionButton: FC<INextSectionButton> = ({ targetSectionId, text, additionalStyle }) => {
  
  const handleClick = () => {
    const targetSection: HTMLElement | null = document.querySelector(`#${targetSectionId}`);
    targetSection && targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <Button onClick={ handleClick } additionalStyle={ additionalStyle }>
      { text }
    </Button>
  )
}

export default NextSectionButton;
