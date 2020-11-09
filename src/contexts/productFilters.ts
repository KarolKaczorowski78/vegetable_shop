import { createContext } from 'react';
import IProductFilters from '../__types__/IProductFilters';

const defaultValues: IProductFilters = {
  filter: false,
  setFilters: () => {  },
  searchFilter: '',
  setSearchFilter: () => {  },
}

export const ProductFilters = createContext<IProductFilters>(defaultValues)

