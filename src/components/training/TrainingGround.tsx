import * as React from 'react';
import { MySelections } from '../../data/types';
import verbData from '../../data/data';
import { useState } from 'react';

interface Props {
  selections: MySelections;
}

const TrainingGround: React.FC<Props> = (props) => {
  const [activeVerb, setActiveVerb] = useState<string>();

  return(
    <div>
      training ground!
      <div>
        {props.selections.map(s => {
          return(
            <button onClick={() => setActiveVerb(s)} key={s}>
              {verbData[s].infinitive}, {verbData[s].perfectiveSibling.infinitive}
            </button>
          );
        })}
      </div>
      
      {activeVerb && verbData[activeVerb].infinitive}
    </div>
  );
};

export default TrainingGround;