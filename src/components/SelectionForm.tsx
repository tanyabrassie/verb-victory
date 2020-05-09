import React from 'react';
import verbData from '../data/data';
import { AspectualType } from '../data/types';

const SelectionForm: React.FC<{}> = () => {
  console.log(verbData);

  const imperfectiveVerbs = verbData.filter((verb) => {
    return verb.type = AspectualType.IMPERFECTIVE;
  });

  return(
    <>
      <div>
        hi
      </div>
      {imperfectiveVerbs.map(item => <div key={item.id}>{item.infinitive}</div>)}
    </>
  );
};

export default SelectionForm;
