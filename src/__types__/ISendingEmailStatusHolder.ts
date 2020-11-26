import { Dispatch, SetStateAction } from "react";

export default interface ISendingEmailStatusHolder {
  emailSent: boolean | undefined,
  setEmailSent: Dispatch<SetStateAction<boolean | undefined>>,
}