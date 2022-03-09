import React from 'react';

export const Button = (props) => {
  return (
    <button onClick={props.onClick} disabled={props.isValid}>
      {props.value}
    </button>
  );
};
