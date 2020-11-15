import { Dispatch, SetStateAction } from 'react';
import ICartProduct from './ICartProduct';

export default interface ICartProducts {
  products: ICartProduct[],
  setCartProducts: Dispatch<SetStateAction<ICartProduct[]>>,
}