import React from 'react';
import BackgroundImage from '../../molecues/BackgroundImage';
import ContactBackgroundImage from '../../../img/aboutBackground.jpg';
import { Section, SectionWrapper, H2, P, Ul, Map, AssetWrapper } from './styles';
import MapImg from '../../../img/map.jpg';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import IconedListItem from '../../molecues/iconedListItem';
import { ContactData } from '../../../data/contactData';

export default function ContactSection() {

  const benefits = [
    'Świeże produkty', 'Przystępne ceny', 'Dowóz produktów', 'Zamówienia online',
  ]
  
  return (
    <SectionWrapper id="contact">
      <BackgroundImage src={ ContactBackgroundImage } alt="" />
      <Section>
        <H2>Skontaktuj się z nami</H2>
        <P>
          Numer telefonu:
          &nbsp; 
          <a href="tel:111-222-333" style={{ color: 'white' }}>
            { ContactData.phoneNumber }
          </a>
        </P>
        <P>
          E-mail:
          &nbsp; 
          <a href="mailto:abcd@gmail.com" style={{ color: 'white' }}>
            { ContactData.emailAdress }
          </a></P> 
        <AssetWrapper>
          <Ul>
            {
              benefits.map(benefit =>
                <IconedListItem 
                  icon={ faCheck }
                  iconColor="lime"
                  text={ benefit }
                />)
            }
          </Ul>
          <Map src={ MapImg } alt="" />
        </AssetWrapper>
      </Section>
    </SectionWrapper>
  )
}
