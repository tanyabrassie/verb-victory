import * as React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {SelectedVerbs} from '../data/types';
import { dramaticTextStyle } from './ui/typography';

interface Props {
  toggleForm: (value: boolean) => void;
  selections: SelectedVerbs;
  setActiveVerb: (s: string) => void;
  verbData: any; //TODO
  activeVerb?: string;
}

const SelectorButton = styled.button<{isActive: boolean}>`
  display: block;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  margin: ${props => props.theme.space[2]}px 0;
  background-color: ${(props) => props.isActive ? props.theme.colors.beige : 'transparent'};
  padding: ${props => props.theme.space[1]}px;
  font-family: ${props => props.theme.fonts.courierNew};

  &:hover {
    background-color: rgba(178, 178, 178, .2);
  }

  &:focus {
    outline: 1px solid black;
  }
`;

const Title = styled.strong`
  ${dramaticTextStyle};
  padding: ${props => props.theme.space[1]}px;
`;

const CircleButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 28px;
  padding-bottom: ${props => props.theme.space[1]}px;

  &:hover {
    color: ${props => props.theme.colors.red};
  }
`;


const Sidebar: React.FC<Props> = ({selections, toggleForm, setActiveVerb, verbData, activeVerb}) => {

  const selectVerb = (s: any) => {
    setActiveVerb(s);
    toggleForm(false);
  };

  return(
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Title>Select Verb</Title>
        <CircleButton onClick={() => toggleForm(true)}>✍︎</CircleButton>
      </Flex>
      {selections.map(s => {
        return(
          <SelectorButton 
            onClick={() => selectVerb(s)} 
            isActive={activeVerb === s}
            key={s}>
            {verbData[s].infinitive}, {verbData[s].perfectiveSibling.infinitive}
          </SelectorButton>
        );
      })}
    </>
  );
};

export default Sidebar;