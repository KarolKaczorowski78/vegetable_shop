import React, { FormEvent, useContext, useState } from 'react';
import { Form, Input, Label, Button, Div } from './styles';
import H2 from '../../atoms/h2/h2';
import ShoppingSummary from '../shoppingSummary';
import FormInput from '../formInput';
import SendingEmailStatusHolder from '../sendingEmailStatusHolder';
import { CartProducts } from '../../../contexts/cartProducts';
import { sendEmail } from '../../../universal/sendEmail';
import { isValidEmail } from '../../../universal/isValidEmail';
import { isValidPhoneNumber } from '../../../universal/isValidPhoneNumber';

export default function OrderForm() {

  const [customerName, setCustomerName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [isEmailSent, setIsEmailSent] = useState<boolean | undefined>(undefined);

  const { products } = useContext(CartProducts);

  const productsPrice = products.length > 0 ? products.map(({ price, ammount }) => price * ammount)
          .reduce((acc, curr) => acc + curr) : 0;

  const supplyPrice = productsPrice < 60 ? 5 : 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (productsPrice >= 30 && isValidEmail(email) && isValidPhoneNumber(phoneNumber)) {
      setIsEmailSent((await sendEmail(e)) as boolean | undefined);
    }
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Div>
      <H2>Złóż zamówienie</H2>
      <FormInput 
        name="client-name"
        placeholder="Jan Kowalski" 
        type="text" 
        state={ customerName }
        setState={ setCustomerName }
        labelContent="Imię"
      />
      <FormInput 
        name="client-email" 
        type="email" 
        placeholder="przykład@przykład.pl" 
        state={ email } 
        setState={ setEmail }
        conditionFunction={ () => isValidEmail(email) } 
        labelContent="E-mail" 
        errorMessage="Wprowadź poprawny adres e-mail"
      />
      <FormInput 
        name="client-adress"
        type="text"
        placeholder="nazwa ulicy/adres/miasto"
        labelContent="Adres dostawy"
        state={ adress }
        setState={ setAdress }
      />
      <FormInput 
        name="client-number"
        type="tel"
        placeholder="9-cio cyfrowy numer"
        state={ phoneNumber }
        setState={ setPhoneNumber }
        conditionFunction={ () => isValidPhoneNumber(phoneNumber) }
        labelContent="Numer telefonu"
        errorMessage="Numer musi składać się z 9 cyfr"
      />
      <Button type="submit">
        Wyślij zamówienie
      </Button>
      <Label htmlFor="products-price" hidden>
        <Input 
          name="products-price"
          hidden 
          value={ productsPrice.toFixed(2) } 
          readOnly
        />
      </Label>
      <Label htmlFor="supply-price" hidden>
        <Input name="supply-price" hidden value={ supplyPrice.toFixed(2) } readOnly />
      </Label>
      <Label htmlFor="total-price" hidden>
        <Input name="total-price" hidden value={ (productsPrice + supplyPrice).toFixed(2) } readOnly/>
      </Label>
      <Label htmlFor="products" hidden>
        <Input 
          name="products" 
          hidden 
          value={ products.map(({ name, ammount, unit }) => 
              `${name} ${ammount} ${unit}`).join(', ') }
          readOnly
        />
      </Label>
      </Div>
      <ShoppingSummary 
        productsPrice={ productsPrice } 
        supplyPrice={ supplyPrice }
      />
      <SendingEmailStatusHolder 
        emailSent={ isEmailSent }
        setEmailSent={ setIsEmailSent }
      />
    </Form>
  )
}