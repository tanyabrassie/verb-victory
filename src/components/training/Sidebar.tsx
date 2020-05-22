import * as React from 'react';
import styled from 'styled-components';
import { SelectedVerbs, Verb } from '../../data/types';

interface Props {
  toggleSelectionModal: (value: boolean) => void;
  selections: SelectedVerbs;
  setActiveVerb: (s: string) => void;
  verbData: any; //TODO
}

const Container = styled.aside`
  height: 500px;
`;

const SelectorButton = styled.button`
  display: block;
`;

const Sidebar: React.FC<Props> = ({selections, toggleSelectionModal, setActiveVerb, verbData}) => {
  return(
    <Container>
      <button onClick={() => toggleSelectionModal(true)}>edit list</button>
      {selections.map(s => {
        return(
          <SelectorButton onClick={() => setActiveVerb(s)} key={s}>
            {verbData[s].infinitive}, {verbData[s].perfectiveSibling.infinitive}
          </SelectorButton>
        );
      })}
    </Container>
  );
};

export default Sidebar;