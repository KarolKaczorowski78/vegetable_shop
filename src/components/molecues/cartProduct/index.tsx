import React, { FC, useEffect } from 'react';
import ICartProduct from '../../../__types__/ICartProduct';
import { Div, Img } from './styles';
import RemoveFromCartButton from '../removeFromCartButton';
import P from '../../atoms/p/p';
import ChangeAmmountButton from '../changeAmmountButton';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const CartProduct: FC<ICartProduct> = ({ name, img, ammount, unit, price }) => {
  
  const { inView, ref, entry } = useInView({ threshold: .1, triggerOnce: true });

  useEffect(() => {
    (inView && entry?.target) && gsap.to(entry.target, { y: 0, autoAlpha: 1, delay: .3 });
  }, [inView])

  return (
    <Div ref={ ref }>
      <RemoveFromCartButton name={ name } />
      <Img src={ inView ? img : '' } alt="" />
      <P>{ name }</P>
      <P>
        <ChangeAmmountButton icon={ faPlus } changeValue={ 1 } productName={ name } />
        Ilość: { ammount } { unit }
        <ChangeAmmountButton icon={ faMinus } changeValue={ -1 } productName={ name } />
      </P>
      <P>Cena: { (price * ammount).toFixed(2) } zł</P>
    </Div>
  )
}

export default CartProduct;