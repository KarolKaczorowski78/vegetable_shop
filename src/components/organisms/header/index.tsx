import React, { ReactNode, useEffect, useState } from 'react';
import { Header as HeaderStyled, Intro } from './styles';
import HeaderBackground from '../../../img/headerBackground.jpg';
import NextSectionButton from '../../molecues/nextSectionButton';
import Slider from '../../molecues/slider';
import OfferCard from '../../molecues/offerCard';
import ECategories from '../../../__types__/ECategories';
import { faAppleAlt, faCarrot, faSeedling } from '@fortawesome/free-solid-svg-icons';
import FruitsImg from '../../../img/categories/fruits.jpg';
import VegetablesImg from '../../../img/categories/vegetables.jpg';
import ArticlesImg from '../../../img/categories/articles.jpg';
import H1 from '../../atoms/h1/h1';
import P from '../../atoms/p/p';
import BackgroundImage from '../../molecues/BackgroundImage';

export default function Header() {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => { 
    window.addEventListener('resize', () => { setWindowWidth(window.innerWidth) })
  }, [])

  const offerCards: ReactNode[] = [
    <OfferCard 
      icon={ faAppleAlt } 
      img={ FruitsImg } 
      category={ ECategories.FRUITS } 
    />,
    <OfferCard icon={ faCarrot } img={ VegetablesImg } category={ ECategories.VEGS } />,
    <OfferCard icon={ faSeedling } img={ ArticlesImg } category={ ECategories.ARTICLES } />,
  ]

  return (
    <HeaderStyled>
      <Intro>
        <H1>Bazarek Radzikowskiego</H1>
        <P>Radzkowksiego 75, Kraków</P>
        <P>Świeże warzywa & owoce</P>
        <NextSectionButton targetSectionId="about-us" text="O nas" />
      </Intro>
      <BackgroundImage src={ HeaderBackground } alt="" />
      { 
        windowWidth > 1200 ? offerCards.map(card => card) : <Slider components={ offerCards } />
      }
    </HeaderStyled>
  )
}
