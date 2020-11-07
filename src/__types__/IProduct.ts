import EUnits from './EUnits';
import ECategories from './ECategories';

export default interface IProduct {
  name: string,
  img: string,
  category: ECategories,
  price?: number,
  unit?: EUnits,
}