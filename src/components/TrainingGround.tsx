import * as React from 'react';
import { MySelections } from '../data/types';
import verbData from '../data/data';
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
              {verbData[s as any].infinitive}, {verbData[s as any].perfectiveSibling.infinitive}
            </button>
          );
        })}
      </div>
      
      {activeVerb && verbData[activeVerb as any].infinitive}
    </div>
  );
};

export default TrainingGround;