import React, { FC, useContext } from 'react';
import { Button } from './styles';
import { CartProducts } from '../../../contexts/cartProducts';
import ISetModeButton from '../../../__types__/ISetModeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

const SetModeButton: FC<ISetModeButton> = ({ editMode, setEditMode, inputValue, productName }) => {

  const { setCartProducts } = useContext(CartProducts);

  const handleClick = () => {
    (editMode && !isNaN(inputValue)) && setCartProducts(state => {
      const newState = [...state];
      const element = state.find(({ name }) => name === productName);
      
      if (element) element.ammount = inputValue;
      
      return newState;
    })
    setEditMode(state => !state);
  }

  return (
    <Button onClick={ handleClick }>
      <FontAwesomeIcon icon={ editMode ? faCheck : faEdit } />
    </Button>
  )
}

export default SetModeButton;