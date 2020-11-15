import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default interface IChangeAmmountButton {
  icon: IconProp,
  changeValue: -1 | 1,
  productName: string,
}