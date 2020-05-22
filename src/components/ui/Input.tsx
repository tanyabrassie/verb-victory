import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { useRef, useEffect, useState } from 'react';

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

  const [showFaces, toggleFaces] = useState<boolean>(false); 

  const onUserInput = (e: any) => {
    props.onChange(e);
    toggleFaces(true);
  };

  return (
    <Flex>
      <input 
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={onUserInput}
        placeholder={props.placeholder}
        className={props.className}
      />
      {!props.error && showFaces && <span>😀</span>}
      {props.error && showFaces && <span>🙁</span>}
    </Flex>
  );
};

const Input = styled(PlainInput)`
  border: ${(props) => props.error ? '1px solid #ff3000' : '1px solid black'};
  background-color: transparent;
  height: 28px;
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  padding: 0 ${props => props.theme.space[1]}px;
`;

export default Input;