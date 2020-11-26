import styled from 'styled-components';
import Button from '../../atoms/button/button';
import DivProto from '../../atoms/div/div';

export const Div = styled(DivProto)`
  position: fixed;
  top: 50px;
  margin: 0 auto 0;
  width: 90vw;
  height: 300px;
  height: auto;
  padding: 50px 10px;
  min-width: 280px;
  max-width: 800px;
  background: blue;
  text-align: center;
  background: rgba(0, 0, 0, .6);
  color: white;
  box-shadow: 0 0 10px black;
  border-radius: 4%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const HideButton = styled(Button)`
  padding: 8px 12px;
  background: none;
  border: 1px solid white;
  font-size: 1.1rem;
  color: white;
  font-family: 'Berkshire Swash', cursive; 
`;