import React, { useState, useEffect, useRef, useContext } from 'react';
import { Div, ProductsContainer, ToggleVisibilityButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import CartProduct from '../../molecues/cartProduct';
import { CartProducts } from '../../../contexts/cartProducts';
import H1 from '../../atoms/h1/h1';
import H2 from '../../atoms/h2/h2';
import P from '../../atoms/p/p';
import gsap from 'gsap';

export default function ShoppingCart() {
  
  const { products } = useContext(CartProducts);

  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const [transformValueY, alphaValue] = visible ? [0, 1] : [25, 0];
    
    gsap.to(ref.current, { y: transformValueY, autoAlpha: alphaValue, duration: .4 });
  }, [visible]);

  return (
    <>
      <ToggleVisibilityButton 
        onClick={ () => { setVisible(state => !state) } }
        text={ products.length }
      >
        <div>
          <FontAwesomeIcon icon={ visible ? faTimes : faShoppingCart } />
        </div>
      </ToggleVisibilityButton>
      <Div ref={ ref }>
        <H1>Twoje zakupy</H1>
        <ProductsContainer>
          { 
            products.length > 0 ? 
              products.map((product, i) => 
                <CartProduct { ...product } key={ i } />)
            :
            <P>Trochę tu pusto</P>
          }
        </ProductsContainer>
        <H2>
          Łącznie:&nbsp;
          { 
            products.length > 0 ? 
              products.map(({ price, ammount }) => price * ammount)
                .reduce((acc, curr) => acc + curr).toFixed(2)
              :
              0
          }
          &nbsp;zł
        </H2>
      </Div>
    </>
  )
}
