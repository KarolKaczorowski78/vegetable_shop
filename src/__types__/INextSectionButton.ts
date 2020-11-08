import { FlattenSimpleInterpolation } from 'styled-components';

export default interface INextSectionButton {
  targetSectionId: string,
  text: string,
  additionalStyle?: FlattenSimpleInterpolation,
}