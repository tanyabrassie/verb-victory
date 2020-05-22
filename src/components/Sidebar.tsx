import * as React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {SelectedVerbs} from '../data/types';

interface Props {
  toggleSelectionModal: (value: boolean) => void;
  selections: SelectedVerbs;
  setActiveVerb: (s: string) => void;
  verbData: any; //TODO
  activeVerb?: string;
}

const Container = styled.aside`
  width: 180px;
  position: sticky;
  top: 0;
  margin: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[2]}px ${props => props.theme.space[4]}px;
  height: 600px;
  border-right: 1px solid ${props => props.theme.colors.mediumRed};
`;

const SelectorButton = styled.button<{isActive: boolean}>`
  display: block;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  margin: ${props => props.theme.space[2]}px 0;
  background-color: ${(props) => props.isActive ? 'rgba(255, 29, 37, .5)' : 'transparent'};
  padding: ${props => props.theme.space[1]}px;
  font-family: ${props => props.theme.fonts.courierNew};

  &:hover {
    background-color: rgba(255, 29, 37, .5);
  }
`;

const Title = styled.strong`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 800;
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

const Sidebar: React.FC<Props> = ({selections, toggleSelectionModal, setActiveVerb, verbData, activeVerb}) => {
  return(
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Title>Select Verb</Title>
        <CircleButton onClick={() => toggleSelectionModal(true)}>✍︎</CircleButton>
      </Flex>
      {selections.map(s => {
        return(
          <SelectorButton 
            onClick={() => setActiveVerb(s)} 
            isActive={activeVerb === s}
            key={s}>
            {verbData[s].infinitive}, {verbData[s].perfectiveSibling.infinitive}
          </SelectorButton>
        );
      })}
    </Container>
  );
};

export default Sidebar;