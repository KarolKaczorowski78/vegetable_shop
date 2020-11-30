import React, { FC } from 'react';
import { Container, Marker } from './styles';
import ICustomSelect from '../../../__types__/ICustomSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CustomSelect: FC<ICustomSelect> = ({ value, setState, state }) => {
  
  const handleClick = () => {
    setState((previousState) => previousState === value ? undefined : value);
  }

  return (
    <Container>
      <Marker onClick={ handleClick }>
        { state === value && <FontAwesomeIcon icon={ faCheck } /> }
      </Marker>
      &nbsp;
      { value }
    </Container>
  )
}

export default CustomSelect;