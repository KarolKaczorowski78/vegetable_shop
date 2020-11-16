import { createContext } from 'react';
import ICartProducts from '../__types__/ICartProducts';

const defaultValues: ICartProducts = {
  products: [],
  setCartProducts: () => {  }, 
}

export const CartProducts = createContext<ICartProducts>(defaultValues);