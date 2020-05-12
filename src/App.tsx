import React, {useState, useEffect} from 'react';
import './App.css';
import SelectionModal from './components/SelectionModal';
import Data from './data/data';
import { MySelections } from './data/types';
import TrainingGround from './components/training/TrainingGround';

// load an array of selections from the local storage
// if there are none load the modal.
// the modal will create a form based on all the data

// when you submit the form it will update local storage with your data and then
// will update the state

// since you have selections training ground will look up those selections
//and create a map on the side

// when you click on one verb, it will update the training ground with that verb id
// another form will be created based on that verb data.

const App: React.FC<{}> = () => {
  
  const [selections, updateSelections] = useState<MySelections>([]);

  const updateAndStoreSelections = (selections: MySelections) => {
    // add them to local storage
    // set the stage
    updateSelections(selections);
  };

  useEffect(() => {
    console.log(selections);
    console.log(Data);
  }, []);
  
  return (
    <>
      <h1>
        Russian Verb Victory - Победа будет твоя!
      </h1>
      
      {!selections.length && <SelectionModal updateSelections={updateSelections} />}
      
      {!!selections.length && <TrainingGround selections={selections}/>}
    </>
  );
};

export default App;
