import { ReactNode } from 'react';
import ECategories from './ECategories';
import { FlattenSimpleInterpolation } from 'styled-components';

export default interface IRedirectToProductsButton {
  children: ReactNode,
  category: ECategories,
  additionalstyle: FlattenSimpleInterpolation,
}