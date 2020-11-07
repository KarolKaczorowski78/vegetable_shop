import ECategories from './ECategories';
import { Dispatch, SetStateAction } from 'react';

export default interface IProductFilters {
  filter: ECategories | false,
  setFilters: Dispatch<SetStateAction<ECategories | false>>
}