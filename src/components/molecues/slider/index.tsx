import React, { FC, useEffect, useState, useRef } from 'react';
import ISlider from '../../../__types__/ISlider';
import Div from '../../atoms/div/div';
import gsap from 'gsap';

const Slider: FC<ISlider> = ({ components }) => {

  const [index, setIndex] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInterval(() => {
      if (container.current) {
        gsap.timeline().to(container.current, {
          autoAlpha: 0,
          onComplete: () => { setIndex(state => state === components.length - 1 ? 0 : state + 1) }})
          .to(container.current, { autoAlpha: 1, delay: .2 }); 
      }
    }, 5000);
  }, [])

  return (
    <Div ref={ container }>
      { components[index] }
    </Div>
  )
}

export default Slider;