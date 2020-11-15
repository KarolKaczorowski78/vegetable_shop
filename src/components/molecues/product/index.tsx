import React, { FC, useEffect, useRef } from 'react';
import { Container, Img, H2, P } from './styles';
import IProduct from '../../../__types__/IProduct';
import AddToCartButton from '../addToCartButton';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Product: FC<IProduct> = (props) => {

  const { name, img, price, unit, unavaible } = props;

  const { ref, inView, entry } = useInView({ 
    threshold: .3,
    triggerOnce: true,
  });

  useEffect(() => {
    (inView && entry?.target) && gsap.to(entry.target, { autoAlpha: 1, y: 0, delay: .2 })
  }, [inView])

  return (
    <Container ref={ ref }>
      <Img src={ inView ? img : '' } alt="" />
      <H2>{ name }</H2>
      <P>{ 
        (price && unit) && `${price.toFixed(2)} zł/${unit}` 
      }</P>
      <AddToCartButton 
        productDetails={ props } 
        unavaible={ unavaible }
        parentElement={ entry?.target }  
      />
    </Container>
  )
}

export default Product;