import * as React from 'react';
import Data from '../data/data';
import {useState} from 'react';
import {MySelections} from '../data/types';

interface Props {
  updateSelections: (s: MySelections) => void;
}

const SelectionForm: React.FC<Props> = (props) => {
  const [changeset, updateChangeset] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (changeset.includes(e.target.value)) {
      updateChangeset(changeset.filter(item => item !== e.target.value));
    } else {
      updateChangeset([...changeset, e.target.value]);
    }
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    props.updateSelections(changeset);
  };

  return (
    <form onSubmit={onSubmit} >
      <h1>Select Your Verbs</h1>
      {Object.keys(Data).map(key => {
        return (
          <div key={key}>
            <label key={key}>
              {Data[key].infinitive}, {Data[key].perfectiveSibling.infinitive}
              <input 
                type="checkbox"
                value={key}
                checked={changeset.includes(key)}
                name={Data[key].infinitive}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
        );
      })}
      <button disabled={!changeset.length} type="submit">Start Studying</button>
    </form>
  );
};

export default SelectionForm;