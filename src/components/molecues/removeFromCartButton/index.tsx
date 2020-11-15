import React, { FC, useContext } from 'react';
import { CartProducts } from '../../../contexts/cartProducts';
import { Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RemoveFromCartButton: FC<{ name: string }> = (props) => {

  const { setCartProducts } = useContext(CartProducts);

  const handleClick = () => {
    setCartProducts(state => state.filter(({ name }) => name !== props.name))
  }

  return (
    <Button onClick={ handleClick }>
      <FontAwesomeIcon icon={ faTimes } />
    </Button>
  )
}

export default RemoveFromCartButton;