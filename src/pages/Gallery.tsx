import React, { ReactNode } from 'react';
import H1 from '../components/atoms/h1/h1';
import H2 from '../components/atoms/h2/h2';
import Slider from '../components/molecues/slider';
import GalleryComponent from '../components/molecues/GalleryComponent';
import InsideImg2 from '../img/gallery/inside2.jpg';
import InsideImg3 from '../img/gallery/inside3.jpg';
import OutsideImg1 from '../img/gallery/outside1.jpg';
import ProductImg1 from '../img/gallery/products1.jpg';
import ProductImg2 from '../img/gallery/products2.jpg';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const GalleryComponents: ReactNode[] = [
  <GalleryComponent img={ InsideImg2 } title="Smacznie" content={ loremIpsum } />,
  <GalleryComponent img={ InsideImg3 } title="Zdrowo" content={ loremIpsum } />,
  <GalleryComponent img={ OutsideImg1 } title="Centrum" content={ loremIpsum } />,
  <GalleryComponent img={ ProductImg1 } title="Świeżo" content={ loremIpsum } />,
  <GalleryComponent img={ ProductImg2 } title="Przyjemnie" content={ loremIpsum } />,
]

export default function Gallery() {
  

  return (
    <div style={{ textAlign: 'center', }}>
      <H1>Galeria</H1>
      <H2>Bazarek Radzikowskiego</H2>
      <Slider components={ GalleryComponents } />
    </div>
  )
}
