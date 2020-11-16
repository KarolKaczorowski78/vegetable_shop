import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import ICartProduct from '../../../__types__/ICartProduct';
import { Div, Img, Span, Input } from './styles';
import P from '../../atoms/p/p';
import RemoveFromCartButton from '../removeFromCartButton';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import SetModeButton from '../setModeButton';

const CartProduct: FC<ICartProduct> = ({ name, img, ammount, unit, price }) => {
  
  const { inView, ref, entry } = useInView({ threshold: .1, triggerOnce: true });
  const [inputValue, setInputValue] = useState<number>(ammount);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    (inView && entry?.target) && gsap.to(entry.target, { y: 0, autoAlpha: 1, delay: .3 });
  }, [inView])

  return (
    <Div ref={ ref }>
      <RemoveFromCartButton name={ name } />
      <Img src={ inView ? img : '' } alt="" />
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
              setInputValue(parseFloat(e.target.value)) 
            } }
          />
      }
      <P>Cena: { (price * ammount).toFixed(2) } zł</P>
    </Div>
  )
}

export default CartProduct;

      // {/* <button> */}        // {/* <FontAwesomeIcon  */}
          // {/* // icon={ editMode ? faCheck : faEdit }  */}
          // {/* // onClick={  */}
            // {/* // editMode ? () => {  } */}
          // {/* // } */}
        // {/* /> */}
      // {/* </button> */}
      // {/* <P> */}
        // {/* <ChangeAmmountButton icon={ faPlus } changeValue={ 1 } productName={ name } /> */}
        // 
        // {/* Ilość: { ammount } { unit } */}
        // {/* <ChangeAmmountButton icon={ faMinus } changeValue={ -1 } productName={ name } /> */}
      // {/* </P> */}
      // {/* <ChangeAmmountButton icon={  } /> */}