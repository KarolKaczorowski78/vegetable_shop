import React, { FormEvent, useContext } from 'react';
import { Form, Input, Label, Button, Div } from './styles';
import H2 from '../../atoms/h2/h2';
import ShoppingSummary from '../shoppingSummary';
import { CartProducts } from '../../../contexts/cartProducts';
import { sendEmail } from '../../../universal/sendEmail';
// import { isValidEmail } from '../../../universal/isValidEmail';
// import { isValidPhoneNumber } from '../../../universal/isValidPhoneNumber';

export default function OrderForm() {

  const { products } = useContext(CartProducts);

  const productsPrice = products.length > 0 ? products.map(({ price, ammount }) => price * ammount)
          .reduce((acc, curr) => acc + curr) : 0;

  const supplyPrice = productsPrice < 60 ? 5 : 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    productsPrice >= 30 && sendEmail(e);
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Div>
      <H2>Złóż zamówienie</H2>
      <Label htmlFor="client-name">Imię</Label>
      <Input required name="client-name" placeholder="Jan Kowalski" />
      <Label htmlFor="client-email">Adres e-mail</Label>
      <Input required name="client-email" placeholder="przykład@przykład.pl" />
      <Label htmlFor="client-adress">Adres dostawy</Label>
      <Input required name="client-adress" placeholder="ul. X 33/44, Kraków" />
      <Label htmlFor="client-number">Number telefonu</Label>
      <Input required name="client-number" placeholder="111 111 111" />
      <Button type="submit">
        Wyślij zamówienie
      </Button>
      <Label htmlFor="products-price" hidden>
        <Input 
          name="products-price"
          hidden 
          value={ productsPrice.toFixed(2) } 
        />
      </Label>
      <Label htmlFor="supply-price" hidden>
        <Input name="supply-price" hidden value={ supplyPrice.toFixed(2) } />
      </Label>
      <Label htmlFor="total-price" hidden>
        <Input name="total-price" hidden value={ (productsPrice + supplyPrice).toFixed(2) }/>
      </Label>
      <Label htmlFor="products" hidden>
        <Input 
          name="products" 
          hidden 
          value={ products.map(({ name, ammount, unit }) => 
              `${name} ${ammount} ${unit}`).join(', ') }
          />
      </Label>
      </Div>
      <ShoppingSummary 
        productsPrice={ productsPrice } 
        supplyPrice={ supplyPrice }
      />
    </Form>
  )
}
