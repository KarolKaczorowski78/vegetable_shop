import React, { useContext } from 'react';
import { CartProducts } from '../../../contexts/cartProducts';
import { Ul, Li, Div, H4, H3 } from './styles';
import H2 from '../../atoms/h2/h2';
import Span from '../../atoms/span/span';
import P from '../../atoms/p/p';

export default function Index() {
  
  const { products } = useContext(CartProducts);
  const totalPrice = products.length > 0 ? products.map(({ price, ammount }) => price * ammount)
                            .reduce((acc, curr) => acc + curr) : 0;

  const supplyPrice = totalPrice < 60 ? 5 : 0;

  return (
    <Div>
      <H2>Twoja lista zakupów</H2>
        <Ul>
          {
            products.length > 0 ?
            products.map(({ name, ammount, unit, price }) => 
              <Li>
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
        <H4>Produkty: { totalPrice.toFixed(2) } zł</H4>
        <H4>Dostawa: { supplyPrice.toFixed(2) } zł</H4>
        <H3>Razem: { (totalPrice + supplyPrice).toFixed(2) } zł</H3>
    </Div>
  )
}
