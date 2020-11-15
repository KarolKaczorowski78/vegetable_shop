import { createContext } from 'react';
import ICartProducts from '../__types__/ICartProducts';

export const defaultValues: ICartProducts = {
  products: [],
  setCartProducts: () => {  }, 
}

export const CartProducts = createContext<ICartProducts>(defaultValues);