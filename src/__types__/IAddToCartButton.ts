import IProduct from './IProduct';

export default interface IAddToCartButton {
  unavaible: true | undefined,
  productDetails: IProduct,
  parentElement: Element | undefined;
}