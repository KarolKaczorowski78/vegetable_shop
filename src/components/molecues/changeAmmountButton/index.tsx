import React, { FC, useContext } from 'react';
import { CartProducts } from '../../../contexts/cartProducts';
import { Button } from './styles';
import IChangeAmmountButton from '../../../__types__/IChangeAmmountButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChangeAmmountButton: FC<IChangeAmmountButton> = ({ icon, changeValue, productName }) => {

  const { setCartProducts } = useContext(CartProducts);

  const handleClick = () => {
    setCartProducts(state => {
      const newState = [...state];
      const element = state.find(({ name }) => name === productName);
      
      if (element) {
        const elementIndex = state.indexOf(element);

        element.ammount += changeValue;
        console.log(element.ammount);
        element.ammount <= 0 ? 
          newState.splice(elementIndex, 1) : newState[elementIndex] = element;
      }
      
      return newState;
    })
  }

  return (
    <Button onClick={ handleClick }>
      <FontAwesomeIcon icon={ icon } />
    </Button>
  )
}

export default ChangeAmmountButton;