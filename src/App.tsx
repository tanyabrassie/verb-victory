import React, {useState} from 'react';
import SelectionModal from './components/SelectionModal';
import { SelectedVerbs } from './data/types';
import TrainingGround from './components/training/TrainingGround';
import Header from './components/Header';
import useLocalStorage from './lib/useLocalStorage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App: React.FC = () => {
 
  const [selectedVerbs, updateSelectedVerbs] = useLocalStorage<SelectedVerbs>('myVerbs', []);
  const [showModal, toggleSelectionModal] = useState<boolean>(!selectedVerbs.length);

  const updateSelections = (changeset: SelectedVerbs) => {
    updateSelectedVerbs(changeset);
    toggleSelectionModal(!showModal);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      {showModal && <SelectionModal selectedVerbs={selectedVerbs} updateSelections={updateSelections} />}
      {!!selectedVerbs.length && <TrainingGround toggleSelectionModal={toggleSelectionModal} selections={selectedVerbs}/>}
    </ThemeProvider>
  );
};

export default App;
