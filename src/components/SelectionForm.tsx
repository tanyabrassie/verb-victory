import * as React from 'react';
import Data from '../data/data';
import {useState} from 'react';
import {SelectedVerbs} from '../data/types';
import styled from 'styled-components';
import { dramaticTextStyle } from './ui/typography';

interface Props {
  updateSelections: (s: SelectedVerbs) => void;
  selectedVerbs: SelectedVerbs;
}

const Title = styled.h1`
  ${dramaticTextStyle};
  text-align: center;
`;

const Checkbox = styled.div`
  font-family: ${props => props.theme.fonts.courierNew};
`;

const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  padding: ${props => props.theme.space[4]}px;
  border: 1px solid ${props => props.theme.colors.black};
  min-height: 300px;
  width: 60%;
  margin: auto;
`;

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

  return (
    <Form onSubmit={onSubmit} >
      <Title>Select Verbs To Study</Title>
      {Object.keys(Data).map(key => {
        return (
          <Checkbox key={key}>
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
          </Checkbox>
        );
      })}
      <button disabled={!changeset.length} type="submit">Start Studying</button>
    </Form>
  );
};

export default SelectionForm;