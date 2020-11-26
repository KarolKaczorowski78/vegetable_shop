import React, { FC, useEffect, useRef } from 'react';
import { Div, HideButton } from './styles';
import ISendingEmailStatusHolder from '../../../__types__/ISendingEmailStatusHolder';
import gsap from 'gsap';
import H2 from '../../atoms/h2/h2';

const SendingEmailStatusHolder: FC<ISendingEmailStatusHolder> = ({ emailSent, setEmailSent }) => {

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setEmailSent(() => undefined);
  }

  useEffect(() => {
    const [alphaValue, yValue] = emailSent === undefined ? [0, 15] : [1, 0];
    gsap.to(ref.current, { y: yValue, autoAlpha: alphaValue });
  }, [emailSent])

  return (
    <Div ref={ ref }>
      <H2>{ emailSent ? "Twoje zamówienie zostało wysłane, dziękujemy!" : "Wystąpił błąd podczas wysyłania zamówienia :C" }</H2>
      <HideButton onClick={ handleClick } type="button">
        Kontynuuj
      </HideButton>
    </Div>
  )
}

export default SendingEmailStatusHolder;