import { Dispatch, SetStateAction } from "react";

export default interface IFormInput {
  type: string,
  name: string,
  state: string,
  setState: Dispatch<SetStateAction<string>>,
  placeholder: string,
  conditionFunction?: () => boolean,
  labelContent: string,
  errorMessage?: string,
}