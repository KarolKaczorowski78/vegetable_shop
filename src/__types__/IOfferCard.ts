import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ICategories from './ECategories';

export default interface IOfferCard {
  img: string,
  icon: IconProp,
  category: ICategories
}