import React from 'react';
import { Section, H2, P, Div, Img, ButtonStyle } from './styles';
import AboutBackgroundImg from '../../../img/aboutBackground.jpg';
import NextSectionButton from '../../molecues/nextSectionButton';
import BackgroundImage from '../../molecues/BackgroundImage';
import QualityAssuranceImg from '../../../img/qualityAssurance.jpg'
import ShopOutsideImg from '../../../img/shopOutside.jpg';
import Card from '../../molecues/card';

export default function About() {


  return (
    <Section id="about-us">
      <Div>
        <H2>O nas</H2>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
        <NextSectionButton 
          targetSectionId="contact" 
          text="Skontaktuj się z nami" 
          additionalStyle={ ButtonStyle } 
        />
        <Img src={ ShopOutsideImg } alt="" />
      </Div>
      <Card img={ QualityAssuranceImg } text="Zdrowo i smacznie" />
      <BackgroundImage src={ AboutBackgroundImg } />
    </Section>
  )
}
