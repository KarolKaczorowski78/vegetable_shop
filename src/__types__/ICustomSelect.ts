import { Dispatch, SetStateAction } from 'react';
import { EPaymentMethods } from './EPaymentMethods';

export default interface ICustomSelect {
  value: EPaymentMethods,
  setState: Dispatch<SetStateAction<EPaymentMethods | undefined>>,
  state: EPaymentMethods | undefined,
}