import React, {useState} from 'react';
import './App.css';
import SelectionModal from './components/SelectionModal';
import { MySelections } from './data/types';
import TrainingGround from './components/training/TrainingGround';
import useLocalStorage from './lib/useLocalStorage';

const App: React.FC<{}> = () => {
 
  const [myVerbs, updateMyVerbs] = useLocalStorage<MySelections>('myVerbs', []);
  const [showModal, toggleSelectionModal] = useState<boolean>(!myVerbs.length);

  const updateSelections = (changeset: MySelections) => {
    updateMyVerbs(changeset);
    toggleSelectionModal(!showModal);
  };
  
  return (
    <>
      <h1>
        Russian Verb Victory - Победа будет твоя!
      </h1>
      
      {showModal && <SelectionModal updateSelections={updateSelections} />}
      
      {!!myVerbs.length && <TrainingGround toggleSelectionModal={toggleSelectionModal} selections={myVerbs}/>}
    </>
  );
};

export default App;
