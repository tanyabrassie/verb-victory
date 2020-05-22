import React, {useState} from 'react';
import SelectionModal from './components/SelectionModal';
import { SelectedVerbs } from './data/types';
import Header from './components/Header';
import useLocalStorage from './lib/useLocalStorage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Sidebar from './components/training/Sidebar';
import Quiz from './components/training/Quiz';
import verbData from './data/data';

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
      <Header/>
      {showModal && <SelectionModal selectedVerbs={selectedVerbs} updateSelections={updateSelections} />}
      
      {!!selectedVerbs.length &&
        <>
          <Sidebar
            setActiveVerb={setActiveVerb} 
            toggleSelectionModal={toggleSelectionModal}
            selections={selectedVerbs}
            verbData={verbData}        
          />
        </>
      }

      {!!selectedVerbs.length && activeVerb && 
        <Quiz verb={verbData[activeVerb]}/>
      }

    </ThemeProvider>
  );
};

export default App;
