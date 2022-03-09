import React from 'react';
import { Label } from '../Atmos/Label';
import { TextInput } from '../Atmos/TextInput';

export const LabelAndTextInput = (props) => {
  return (
    <div>
      <Label>
        {props.labelName}
        <TextInput value={props.inputValue} onChange={props.inputOnChange} />
      </Label>
    </div>
  );
};