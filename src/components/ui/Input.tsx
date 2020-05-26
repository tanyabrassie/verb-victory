import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import {useState} from 'react';

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

const Face = styled.div`
  width: 25px;
  font-size: 20px;
  margin-left: ${props =>  props.theme.space[1]}px;
`;

const PlainInput: React.FC<Props> = (props) => {

  const [showFaces, toggleFaces] = useState<boolean>(false); 

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Face>
        {!props.error && !!props.value.length && showFaces && <span>😀</span>}
        {props.error && !!props.value.length && showFaces && <span>🙁</span>}
      </Face>
    </Flex>
  );
};

const Input = styled(PlainInput)`
  border: none;
  border-bottom: ${(props) => props.error ? '1px solid #ff3000' : '1px solid rgba(0, 0, 0, .3)'};
  background-color: transparent;
  height: 28px;
  width: 100%;
  font-size: 15px;
  font-family: ${props => props.theme.fonts.courierNew};
  font-weight: 600;
  padding: 0 ${props => props.theme.space[1]}px;

  &:focus {
    outline: none;
  }
`;

export default Input;