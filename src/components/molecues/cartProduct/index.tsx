import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import ICartProduct from '../../../__types__/ICartProduct';
import { Div, Img, Span, Input, ImgContainer } from './styles';
import P from '../../atoms/p/p';
import RemoveFromCartButton from '../removeFromCartButton';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import SetModeButton from '../setModeButton';
import EUnits from '../../../__types__/EUnits';
import NoImgContainer from '../noImageContainer';

const CartProduct: FC<ICartProduct> = ({ name, ammount, unit, price, category }) => {
  
  const { inView, ref, entry } = useInView({ threshold: .1, triggerOnce: true });
  const [inputValue, setInputValue] = useState<number>(ammount);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    (inView && entry?.target) && gsap.to(entry.target, { y: 0, autoAlpha: 1, delay: .3 });
  }, [inView])

  return (
    <Div ref={ ref }>
      <RemoveFromCartButton name={ name } />
      <ImgContainer>
        {/* <Img src={ inView ? img : '' } alt="" /> */}
        <NoImgContainer category={ category } />
      </ImgContainer>
      <P>{ name }</P>
      <SetModeButton
        editMode={ editMode }
        setEditMode={ setEditMode } 
        inputValue={ inputValue }
        productName={ name }
      />
      {
        !editMode ?
          <Span>Ilość { ammount } { unit }</Span>
        :
          <Input 
            type="number" 
            min="0"
            value={ inputValue }
            onChange={ (e: ChangeEvent<HTMLInputElement>) => { 
              let val = parseFloat(e.target.value);
              val = (val > 200 && 200) || ((val < 0) && 0) || val;
              val = unit === EUnits.PIECE ? parseInt(val.toString()) : parseFloat(val.toFixed(2));
              setInputValue(() => val);
            } }
          />
      }
      <P>Cena: { (price * ammount).toFixed(2) } zł</P>
    </Div>
  )
}

export default CartProduct;