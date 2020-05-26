import React, {useState} from 'react';
import SelectionForm from './components/SelectionForm';
import { SelectedVerbs } from './data/types';
import Header from './components/Header';
import useLocalStorage from './lib/useLocalStorage';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import Sidebar from './components/Sidebar';
import Quiz from './components/quiz/Quiz';
import verbData from './data/data';
import {Flex} from 'rebass';

const Main = styled.main`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin: ${props => props.theme.space[4]}px;
  margin-left: ${props => props.theme.space[12]}px;
`;

const SidebarContainer = styled.aside`
  width: 180px;
  position: sticky;
  top: 0;
  margin: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[2]}px ${props => props.theme.space[4]}px;
  height: 600px;
  border-right: 12px solid ${props => props.theme.colors.dustyRed};
`;

const App: React.FC = () => {
 
  const [selectedVerbs, updateSelectedVerbs] = useLocalStorage<SelectedVerbs>('myVerbs', []);
  const [showForm, toggleSelectionForm] = useState<boolean>(!selectedVerbs.length);
  const [activeVerb, setActiveVerb] = useState<string>(selectedVerbs[0]);

  const updateSelections = (changeset: SelectedVerbs) => {
    updateSelectedVerbs(changeset); 
    setActiveVerb(changeset[0]);
    toggleSelectionForm(false);
  };

  const hasVerbSelections = !!selectedVerbs.length;
  return (
    <ThemeProvider theme={theme}>
      <Flex p={'20px'}>
        <SidebarContainer>
          {hasVerbSelections && 
            <Sidebar
              setActiveVerb={setActiveVerb} 
              toggleForm={toggleSelectionForm}
              selections={selectedVerbs}
              verbData={verbData}    
              activeVerb={activeVerb}    
            />
          }
        </SidebarContainer>

        <Main>
          <Header/>
          {hasVerbSelections && activeVerb && !showForm && <Quiz verb={verbData[activeVerb]}/> }
          {showForm && 
            <SelectionForm selectedVerbs={selectedVerbs} updateSelections={updateSelections} /> }
        </Main>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
