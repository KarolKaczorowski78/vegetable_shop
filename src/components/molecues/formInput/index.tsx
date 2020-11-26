import React, { FC, ChangeEvent, useState } from 'react';
import IFormInput from '../../../__types__/IFormInput';
import { Input, Label } from './styles';
import InputStatusHolder from '../validationStatusHolder';

const FormInput: FC<IFormInput> = ({ name, setState, state, type, placeholder, 
                                      conditionFunction, labelContent, errorMessage }) => {

  const [status, setStatus] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(() => e.target.value);
  }

  const handleBlur = () => {
    conditionFunction && setStatus(() => conditionFunction());    
  }

  return (
    <>
      <Label htmlFor={ name }>
        { labelContent } &nbsp;
        { conditionFunction && <InputStatusHolder 
                                        isCorrect={ status } 
                                        errorMessage={ errorMessage ? errorMessage : '' } /> }
      </Label>
      <Input 
        type={ type }
        value={ state } 
        required 
        name={ name } 
        placeholder={ placeholder } 
        onChange={ handleChange } 
        onBlur={ handleBlur }
      />
    </>
  )
}

export default FormInput;