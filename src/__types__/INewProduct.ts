import ECategories from "./ECategories";
import EUnits from "./EUnits";

export default interface INewProduct {
  Name: string,
  Unit: EUnits,
  Price: number,
  Image: any,
  Availability: boolean,
  Category: ECategories,
}