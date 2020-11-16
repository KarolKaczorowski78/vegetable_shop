import React, { FormEvent } from 'react';
import { Form, Input, Label, Button } from './styles';
import H2 from '../../atoms/h2/h2';

export default function OrderForm() {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <H2>Złóż zamówienie</H2>
      <Label htmlFor="name">Imię</Label>
      <Input required name="name" placeholder="Jan Kowalski" />
      <Label htmlFor="email">Adres e-mail</Label>
      <Input required name="email" placeholder="przykład@przykład.pl" />
      <Label htmlFor="adress">Adres dostawy</Label>
      <Input required name="adress" placeholder="ul. X 33/44, Kraków" />
      <Label htmlFor="phone-number">Number telefonu</Label>
      <Input required name="phone-number" placeholder="111 111 111" />
      <Button type="submit">
        Wyślij zamówienie
      </Button>
    </Form>
  )
}
