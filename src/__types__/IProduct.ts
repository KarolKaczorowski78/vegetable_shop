import EUnits from './EUnits';
import ECategories from './ECategories';

export default interface IProduct {
  name: string,
  img: string,
  category: ECategories | ECategories[],
  price: number,
  unit: EUnits,
  unavaible?: true,
}