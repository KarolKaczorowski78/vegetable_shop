import React, { FC, useRef } from 'react';
import { Div, Message } from './styles';
import IValidationStatusHolder from '../../../__types__/IValidationStatusHolder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const InputStatusHolder: FC<IValidationStatusHolder> = ({ isCorrect, errorMessage }) => {

  const message = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    gsap.to(message.current, { autoAlpha: 1 });
  }

  const handleMouseOut = () => {
    gsap.to(message.current, { autoAlpha: 0 });
  }

  return (
    <Div isCorrect={ isCorrect } onMouseOver={ handleMouseOver } onMouseOut={ handleMouseOut }>
      <FontAwesomeIcon icon={ isCorrect ? faCheck : faTimes } />
      <Message ref={ message }>{ errorMessage }</Message>
    </Div>
  )
}

export default InputStatusHolder;