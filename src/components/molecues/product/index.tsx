import React, { FC, useEffect } from 'react';
import { Container, H2, P, ImgContainer } from './styles';
import AddToCartButton from '../addToCartButton';
import { useInView } from 'react-intersection-observer';
import INewProduct from '../../../__types__/INewProduct';
import gsap from 'gsap';
// import path from 'path';
import NoImageContainer from '../noImageContainer';

const Product: FC<INewProduct> = (props) => {

  const { Name, Price, Unit, Category } = props;
  // const imgUrl = path.join('http://localhost:1337/upload/files/') + Image[0].name;
  const { ref, inView, entry } = useInView({ 
    threshold: .2,
    triggerOnce: true,
  });

  useEffect(() => {
    (inView && entry?.target) && gsap.to(entry.target, { autoAlpha: 1, y: 0, delay: .2 })
  }, [inView])

  return (
    <Container ref={ ref }>
      <ImgContainer>
        {/* <Img src={ inView ? imgUrl : '' } alt="" /> */}
        <NoImageContainer category={ Category } />
      </ImgContainer>
      <H2>{ Name }</H2>
      <P>{ 
        (Price && Unit) && `${Price.toFixed(2)} zł/${Unit}` 
      }</P>
      <AddToCartButton 
        productDetails={ props } 
        parentElement={ entry?.target }  
      />
    </Container>
  )
}

export default Product;