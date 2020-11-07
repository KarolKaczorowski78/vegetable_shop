import { createContext } from 'react';
import IProductFilters from '../__types__/IProductFilters';

const defaultValues: IProductFilters = {
  filter: false,
  setFilters: () => {  },
}

export const ProductFilters = createContext<IProductFilters>(defaultValues)

