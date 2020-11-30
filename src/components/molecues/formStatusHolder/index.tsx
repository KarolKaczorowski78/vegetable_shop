import React, { FC, useEffect, useRef, useState } from 'react';
import { Div, HideButton } from './styles';
import IFormStatusHolder from '../../../__types__/IFormStatusHolder';
import gsap from 'gsap';
import H2 from '../../atoms/h2/h2';
import { EFormStatuses } from '../../../__types__/EFormStatuses';
import { getSupplyDate } from '../../../universal/getSupplyDate';

const FormStatusHolder: FC<IFormStatusHolder> = ({ formStatus, setFormStatus }) => {

  const { DEFAULT, EMAIL_ERROR, EMAIL_SENT, FORM_INCORRECT } = EFormStatuses;
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>('');

  const handleClick = () => {
    setFormStatus(() => DEFAULT)
  }

  const getH1Content = () => {
    getSupplyDate();
    switch(formStatus) {
      case FORM_INCORRECT:
        return 'Proszę spełnić wszystkie niezbędne warunki';
      case EMAIL_SENT:
        return 'Zamówienie wysłane pomyślnie! Dziękujemy!';
      case EMAIL_ERROR:
        return 'Coś poszło nie tak podczas wysyłania zamówienia';
      default:
        return '';
    }
  }

  useEffect(() => {
    const [alphaValue, yValue] = formStatus === DEFAULT ? [0, 15] : [1, 0];
    gsap.to(ref.current, { y: yValue, autoAlpha: alphaValue });

    setContent(() => getH1Content());
  }, [formStatus])

  return (
    <Div ref={ ref }>
      <H2>{ content }</H2>
      { 
      formStatus === EMAIL_SENT && 
      <h3>{ 
      `${getSupplyDate()}. Skontaktujemy się z Tobą telefonicznie w celu potwierdzenia zamówienia.`
      }</h3> 
      }
      <HideButton onClick={ handleClick } type="button">
        Kontynuuj
      </HideButton>
    </Div>
  )
}

export default FormStatusHolder;