import * as React from 'react';
import Data from '../data/data';
import {useState} from 'react';
import {SelectedVerbs} from '../data/types';
import styled from 'styled-components';
import { dramaticTextStyle } from './ui/typography';
import {Flex} from 'rebass';

interface Props {
  updateSelections: (s: SelectedVerbs) => void;
  selectedVerbs: SelectedVerbs;
}

const Title = styled.h1`
  ${dramaticTextStyle};
  text-align: center;
`;

const Checkbox = styled(Flex)`
  font-family: ${props => props.theme.fonts.courierNew};
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding: ${props => props.theme.space[1]}px;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  padding: ${props => props.theme.space[6]}px;
  border: 1px solid ${props => props.theme.colors.black};
  min-height: 300px;
  width: 60%;
  margin: auto;
`;

const OptionBox = styled(Flex)`
  margin-top: ${props => props.theme.space[4]}px;
  flex-direction: column;
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
      <OptionBox>
        {Object.keys(Data).map(key => {
          return (
            <Checkbox key={key}>
              <label key={key}>
                {Data[key].infinitive}, {Data[key].perfectiveSibling.infinitive}
              </label>
              <input 
                type="checkbox"
                value={key}
                checked={changeset.includes(key)}
                name={Data[key].infinitive}
                onChange={(e) => handleChange(e)}
              />
            </Checkbox>
          );
        })}
      </OptionBox>
      <button disabled={!changeset.length} type="submit">Start Studying</button>
    </Form>
  );
};

export default SelectionForm;