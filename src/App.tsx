import React, {useState} from 'react';
import SelectionModal from './components/SelectionModal';
import { SelectedVerbs } from './data/types';
import Header from './components/Header';
import useLocalStorage from './lib/useLocalStorage';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import Sidebar from './components/Sidebar';
import Quiz from './components/quiz/Quiz';
import verbData from './data/data';
import {Flex} from 'rebass';
import NoSelectionsPrompt from './components/NoSelectionsPrompt';

const Main = styled.main`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin: ${props => props.theme.space[4]}px;
  margin-left: ${props => props.theme.space[12]}px;
`;

const App: React.FC = () => {
 
  const [selectedVerbs, updateSelectedVerbs] = useLocalStorage<SelectedVerbs>('myVerbs', []);
  const [showModal, toggleSelectionModal] = useState<boolean>(!selectedVerbs.length);
  const [activeVerb, setActiveVerb] = useState<string>();

  const updateSelections = (changeset: SelectedVerbs) => {
    updateSelectedVerbs(changeset);
    toggleSelectionModal(!showModal);
  };
  
  return (
    <ThemeProvider theme={theme}>
      {showModal && <SelectionModal selectedVerbs={selectedVerbs} updateSelections={updateSelections} />}
      <Flex p={'20px'}>
        {!!selectedVerbs.length &&
          <Sidebar
            setActiveVerb={setActiveVerb} 
            toggleSelectionModal={toggleSelectionModal}
            selections={selectedVerbs}
            verbData={verbData}    
            activeVerb={activeVerb}    
          />
        }
        <Main>
          <Header/>
          {!activeVerb && !!selectedVerbs.length && <NoSelectionsPrompt/>}
          {!!selectedVerbs.length && activeVerb &&  <Quiz verb={verbData[activeVerb]}/> }
        </Main>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
