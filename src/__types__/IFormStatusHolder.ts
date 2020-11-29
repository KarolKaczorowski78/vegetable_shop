import { Dispatch, SetStateAction } from "react";
import { EFormStatuses } from './EFormStatuses';

export default interface IFormStatusHolder {
  formStatus: EFormStatuses,
  setFormStatus: Dispatch<SetStateAction<EFormStatuses>>,
}