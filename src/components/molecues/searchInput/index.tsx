import React, { useContext, ChangeEvent } from 'react';
import { ProductFilters } from '../../../contexts/productFilters';
import { Input } from './styles';

export default function SearchFilter() {
  
  const { searchFilter ,setSearchFilter, filter } = useContext(ProductFilters);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(() => e.target.value)
  }

  return (
    <Input 
      value={ searchFilter }
      onChange={ handleChange } 
      type="text"
      placeholder={ filter ? `Znajdź w: ${filter}` : 'Znajdź produkt' }  
    />
  )
}
