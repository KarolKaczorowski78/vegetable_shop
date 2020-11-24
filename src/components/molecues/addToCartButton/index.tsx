import React, { FC, useContext, useState } from 'react';
import { Button } from './styles';
import P from '../../atoms/p/p';
import { CartProducts } from '../../../contexts/cartProducts';
import IAddToCartButton from '../../../__types__/IAddToCartButton';
import gsap from 'gsap';

const AddToCartButton: FC<IAddToCartButton> = ({ productDetails, parentElement }) => {

  let { products, setCartProducts } = useContext(CartProducts);
  const { Name, Image, Unit, Price, Availability } = productDetails;

  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const handleClick = () => {
    if (!isAnimated) {
      setIsAnimated(() => true);

      const result = products.find(({ name }) => name === Name);

      result ? result.ammount++ : setCartProducts(state => [...state, { 
        name: Name,
        img: Image,
        ammount: 1,
        unit: Unit,
        price: Price,
      }]);
  
      parentElement && gsap.timeline({ defaults: { duration: .3 } })
        .to(parentElement, { scale: 1.07 })
        .to(parentElement, { scale: 1, delay: .3, onComplete: () => setIsAnimated(() => false) });
      }
  }

  return Availability ?
    <Button onClick={ handleClick }>
      Do koszyka
    </Button>
    :
    <P>Produkt niedostępny</P> 
}

export default AddToCartButton;