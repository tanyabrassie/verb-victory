import * as React from 'react';
import Data from '../data/data';
import {useState} from 'react';
import {SelectedVerbs} from '../data/types';
import styled from 'styled-components';

interface Props {
  updateSelections: (s: SelectedVerbs) => void;
  selectedVerbs: SelectedVerbs;
}

const SelectionForm: React.FC<Props> = (props) => {
  const [changeset, updateChangeset] = useState<SelectedVerbs>(props.selectedVerbs);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (changeset.includes(e.target.value)) {
      updateChangeset(changeset.filter(item => item !== e.target.value));
    } else {
      updateChangeset([...changeset, e.target.value]);
    }
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.updateSelections(changeset);
  };


  const Title = styled.h1`
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
  `;

  return (
    <form onSubmit={onSubmit} >
      <Title>Select Your Verbs</Title>
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