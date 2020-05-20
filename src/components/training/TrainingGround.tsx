import * as React from 'react';
import { MySelections } from '../../data/types';
import verbData from '../../data/data';
import { useState } from 'react';
import Quiz from './Quiz';
import styled from 'styled-components';

interface Props {
  selections: MySelections;
  toggleSelectionModal: (value: boolean) => void;
}

const Sidebar = styled.aside`
  border: 1px solid red;
  height: 500px;
`;

const Container = styled.div`
  display: flex;
`;

const SelectorButton = styled.button`
  display: block;
`;

const TrainingGround: React.FC<Props> = (props) => {
  const [activeVerb, setActiveVerb] = useState<string>();

  return(
    <Container>
      {/* //sidebar */}
      <Sidebar>
        <button onClick={() => props.toggleSelectionModal(true)}>edit list</button>
        {props.selections.map(s => {
          return(
            <SelectorButton onClick={() => setActiveVerb(s)} key={s}>
              {verbData[s].infinitive}, {verbData[s].perfectiveSibling.infinitive}
            </SelectorButton>
          );
        })}
      </Sidebar>
       
      {activeVerb && <Quiz verb={verbData[activeVerb]}/>}
    </Container>
  );
};

export default TrainingGround;