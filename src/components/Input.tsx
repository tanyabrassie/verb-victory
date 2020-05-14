import * as React from 'react';
import styled from 'styled-components';

interface Props {
  type: string;
  onChange: (e:  React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
}

const PlainInput: React.FC<Props> = (props) => {
  return (
    <input 
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

const Input = styled(PlainInput)`
  border: ${(props) => props.error ? '1px solid red' : '1px solid blue'};
`;

export default Input;