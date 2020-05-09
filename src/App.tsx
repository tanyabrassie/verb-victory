import React, {useState} from 'react';
import './App.css';
import SelectionModal from './components/SelectionModal';

const App: React.FC<{}> = () => {
  const myVerbList = 'myVerbList';
  // check local state for list
  // if no list is set pull in the data and show the modal
  const [list, updateList] = useState(window.localStorage.getItem(myVerbList));

  // useEffect(() => {
  //   const list = window.localStorage.getItem(myVerbList);

  // });

  return (
    <>
      <h1>
        Russian Verb Master
      </h1>
      {!list && <SelectionModal updateList={updateList} />}
    </>
  );
};

export default App;
