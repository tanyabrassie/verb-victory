import React, {useEffect, useCallback, useState} from 'react';
import './App.css';

const App: React.FC<{}> = () => {
  /// imports data
  // checks to see if there is an existing list
  // allows you to choose a list

  //saves list in local storage
  //

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log('hi');
  });

  useCallback(() => {
    console.log('callback');
  }, [state]);

  return (
    <h1>
      {state}
      Russian Verb Master
      <button onClick={() => setState(state + 1)}></button>
    </h1>
  );
};

export default App;
