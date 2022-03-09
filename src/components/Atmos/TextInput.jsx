import React from 'react';

export const TextInput = (props) => {
  return (
    <input type='text' defaultValue={props.value} onChange={props.onChange} />
  );
};