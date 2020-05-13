import * as React from 'react';
import { MySelections } from '../../data/types';
import verbData from '../../data/data';
import { useState } from 'react';
import Quiz from './Quiz';
import styled from 'styled-components';

interface Props {
  selections: MySelections;
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
  console.log(typeof activeVerb);
  console.log(verbData);

  return(
    <Container>
      {/* //sidebar */}
      <Sidebar>
        {props.selections.map(s => {
          return(
            <SelectorButton onClick={() => setActiveVerb(s)} key={s}>
              {verbData[s].infinitive}, {verbData[s].perfectiveSibling.infinitive}
            </SelectorButton>
          );
        })}
      </Sidebar>

      {activeVerb && console.log(verbData[activeVerb])}

       
      {activeVerb && <Quiz verb={verbData[activeVerb]}/>}
    </Container>
  );
};

export default TrainingGround;