import React from 'react';
import { Section, H2, P, Div, Img, ButtonStyle } from './styles';
import AboutBackgroundImg from '../../../img/aboutBackground.jpg';
import NextSectionButton from '../../molecues/nextSectionButton';
import BackgroundImage from '../../molecues/BackgroundImage';
import QualityAssuranceImg from '../../../img/qualityAssurance.jpg'
import Card from '../../molecues/card';

export default function About() {


  return (
    <Section id="about-us">
      <Div>
        <H2>O nas</H2>
        <P style={{ fontSize: '1rem', textAlign: 'justify' }}>
          Bazarek Radzikowskiego to Twój lokalny sprzedawca warzyw, owoców i ziół nastawiony na wysoką jakość oferowanego towaru. Nasz pomysł na udany biznes: nowoczesne podejście i elastyczność we współpracy z Klientem.
          Jesteśmy ściśle powiązani z dużym gospodarstwem rolnym. Dzięki temu mamy wiele własnych produktów. Współpracujemy również z lokalnymi rolnikami. Zawszę chętni do współpracy!  
          Dzięki Wam istniejemy juz od 2016 roku serwując najwyzszej jakosci owocę i warzywa na terenie Bronowic i nie tylko.W sezonie letnim posiadamy również stragan z owocami sezonowymi na ul Stary Trak przy CH Atut.
          Obecna sytuacja związana z pandemią, w której się znajdujemy zmobilizowała nas do wprowadzenia dostaw pod same drzwi.
          Zamowienia skladane do godziny 20 beda realizowane następnego dnia do godziny 18. Płatnosci można dokonać gotówką lub bezgotówkowo przy odbiorze dostawy.
        </P>
        <NextSectionButton 
          targetSectionId="contact" 
          text="Skontaktuj się z nami" 
          additionalStyle={ ButtonStyle } 
        />
        {/* <Img src={ ShopOutsideImg } alt="" /> */}
      </Div>
      <Card img={ QualityAssuranceImg } text="Zdrowo i smacznie" />
      <BackgroundImage src={ AboutBackgroundImg } />
    </Section>
  )
}
