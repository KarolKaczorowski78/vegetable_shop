import React from 'react';
import BackgroundImage from '../../molecues/BackgroundImage';
import ContactBackgroundImage from '../../../img/aboutBackground.jpg';
import { Section, SectionWrapper, H2, P, Ul, AssetWrapper } from './styles';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import IconedListItem from '../../molecues/iconedListItem';
import { ContactData } from '../../../data/contactData';

const { phoneNumber, emailAdress } = ContactData;

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
          <a href={ `tel:${phoneNumber}` } style={{ color: 'white' }}>
            { phoneNumber }
          </a>
        </P>
        <P>
          E-mail:
          &nbsp; 
          <a href={ `mailto:${emailAdress}` } style={{ color: 'white' }}>
            { emailAdress }
          </a></P> 
        <AssetWrapper>
          <Ul>
            {
              benefits.map((benefit, i) =>
                <IconedListItem 
                  icon={ faCheck }
                  iconColor="lime"
                  text={ benefit }
                  key={ i }
                />)
            }
          </Ul>
          {/* <Map src={ MapImg } alt="" /> */}
          <iframe 
            title="map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1LPBn3dcoCYB8kiKR3qLtGO5-Fm4LtcLr" 
            width="300" 
            height="250"></iframe>
        </AssetWrapper>
      </Section>
    </SectionWrapper>
  )
}
