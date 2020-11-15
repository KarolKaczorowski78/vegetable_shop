import EUnits from './EUnits';

export default interface ICartProduct {
  name: string,
  img: string,
  ammount: number,
  unit: EUnits,
  price: number,
}