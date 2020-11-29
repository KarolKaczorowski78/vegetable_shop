import { Dispatch, SetStateAction } from "react";
import { EFormStatuses } from './EFormStatuses';

export default interface ISendingEmailStatusHolder {
  formStatus: EFormStatuses,
  setFormStatus: Dispatch<SetStateAction<EFormStatuses>>,
}