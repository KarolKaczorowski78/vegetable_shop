// import IProduct from './IProduct';
import INewProduct from './INewProduct';

export default interface IAddToCartButton {
  // unavaible: true | undefined,
  productDetails: INewProduct,
  parentElement: Element | undefined;
}