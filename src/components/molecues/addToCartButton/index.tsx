import React, { FC, useContext, useState } from 'react';
import { Button } from './styles';
import P from '../../atoms/p/p';
import { CartProducts } from '../../../contexts/cartProducts';
import IAddToCartButton from '../../../__types__/IAddToCartButton';
import gsap from 'gsap';

const AddToCartButton: FC<IAddToCartButton> = ({ productDetails, unavaible, parentElement }) => {

  let { products, setCartProducts } = useContext(CartProducts);
  const { name, img, unit, price } = productDetails;

  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const handleClick = () => {
    if (!isAnimated) {
      setIsAnimated(() => true);

      const result = products.find(({ name }) => name === productDetails.name);

      result ? result.ammount++ : setCartProducts(state => [...state, { 
        name: name,
        img: img,
        ammount: 1,
        unit: unit,
        price: price,
      }]);
  
      parentElement && gsap.timeline({ defaults: { duration: .3 } })
        .to(parentElement, { scale: 1.07 })
        .to(parentElement, { scale: 1, delay: .3, onComplete: () => setIsAnimated(() => false) });
      }
  }

  return unavaible ?
    <P>Produkt niedostępny</P> 
    :
    <Button onClick={ handleClick }>
      Do koszyka
    </Button>
}

export default AddToCartButton;