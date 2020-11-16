import { Dispatch, SetStateAction } from "react";

export default interface ISetModeButton {
  editMode: boolean,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  inputValue: number,
  productName: string,
}