import React, { useContext } from 'react';
import { CartProducts } from '../../../contexts/cartProducts';
import { Ul, Li, Div, H4, H3 } from './styles';
import H2 from '../../atoms/h2/h2';
import Span from '../../atoms/span/span';
import P from '../../atoms/p/p';

export default function ShoppingSummary(props: { productsPrice: number, supplyPrice: number }) {
  
  const { products } = useContext(CartProducts);

  return (
    <Div>
      <H2>Twoja lista zakupów</H2>
        <Ul>
          {
            products.length > 0 ?
            products.map(({ name, ammount, unit, price }, i) => 
              <Li key={ i }>
                <Span style={{ textAlign: 'left', }}>
                  { name }
                  <Span style={{ fontSize: '.6rem', display: 'block', }}>
                    { `Ilość: ${ammount} ${unit}` }
                  </Span>
                </Span>
                <Span>
                  { `${(ammount * price).toFixed(2)} zł` }
                </Span>
              </Li>
            )
            :
            <P>Twoja lista jest pusta</P>
          }
        </Ul>
        <H4>Produkty: { props.productsPrice.toFixed(2) } zł</H4>
        <H4>Dostawa: { props.supplyPrice.toFixed(2) } zł</H4>
        <H3>Razem: 
            { (props.productsPrice + props.supplyPrice).toFixed(2) } zł
          </H3>
    </Div>
  )
}
