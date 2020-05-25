import * as React from 'react';
import {Verb, Persons, Tense} from '../../data/types';
import {Flex, Box} from 'rebass';
import {useReducer} from 'react';
import Input from '../ui/Input';
import VerbHeader from './VerbHeader';
import styled from 'styled-components';
import {dramaticTextStyle} from '../ui/typography';

interface Props {
  verb: Verb;
}

interface ImpChangeset {
  present: Persons;
  past: Persons;
  future: Persons;
}

interface PerChangeset {
  past: Persons;
  future: Persons;
}

//reduce function which takes state and action object
const reduce = (state: any, action: any) => {
  switch (action.tense) {
  case Tense.PRESENT:
    return {
      ...state,
      present: {...state.present, [action.person]: action.value},
    };
  case Tense.PAST:
    return {
      ...state,
      past: {...state.past, [action.person]: action.value},
    };
  case Tense.FUTURE:
    return {
      ...state,
      future: {...state.future, [action.person]: action.value},
    };
  } 
};

const QuizContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[10]}px;
`;

const InputContainer = styled(Flex)`
  flex-direction: column;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: 0;
  width: 80%;
`;

const Label = styled.label`
  margin-bottom: ${props => props.theme.space[1]}px;
`;

const FormContainer = styled(Flex)`
  width: 100%;
`;

const FormGroup = styled(Box)`
  padding: 15px 15px 0 0;
`;

const TenseHeader = styled(Flex)`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  padding-top: ${props => props.theme.space[10]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;

const TenseLabel = styled.h2`
  width: calc(100% / 3);
  ${dramaticTextStyle};
`;

const Quiz: React.FC<Props> = ({verb}) => {
  const imperfectiveForms = verb.conjugation;
  const perfectiveForms = verb.perfectiveSibling.conjugation;

  const persons: Persons = {
    я: '',
    ты: '',
    вы: '',
    она: '',
    он: '',
    оно: '',
    мы: '',
    они: '',
  };

  const changeset: ImpChangeset = {
    past: {
      ...persons,
    },
    future: {
      ...persons,
    },
    present: {
      ...persons,
    },
  };

  const perChangeset: PerChangeset = {
    past: {
      ...persons,
    },
    future: {
      ...persons,
    },
  };

  const [impState, iDispatch] = useReducer(reduce, changeset);
  const [perState,  pDispatch] = useReducer(reduce, perChangeset);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, tense: Tense, dispatcher: ({}) => void) => {
    dispatcher({
      tense: tense,
      person: e.target.name,
      value: e.target.value,
    });
  };

  const hasError = (input: any, correct: any) => {
    return (!input.length || input === correct) ? false : true;
  };

  return(
    <QuizContainer>
      <VerbHeader
        aspect={'imperfective'}
        definition={verb.definition}
        infinitive={verb.infinitive}
      >
      </VerbHeader>
      <TenseHeader>
        <TenseLabel>Present</TenseLabel>
        <TenseLabel>Past</TenseLabel>
        <TenseLabel>Future</TenseLabel>
      </TenseHeader>
      <FormContainer pb={'120px'}>
        <FormGroup width={1/3}>
          {(Object.keys(imperfectiveForms.present) as Array<keyof typeof imperfectiveForms.present>).map(key => {
            return(
              <InputContainer key={key + imperfectiveForms.present[key]}>
                <Label>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  value={impState.present[key]}
                  onChange={(e) => handleChange(e, Tense.PRESENT, iDispatch)}
                  error={hasError(impState.present[key], imperfectiveForms.present[key])}
                />
              </InputContainer>
            );
          })}
        </FormGroup>

        <FormGroup width={1/3}>
          {(Object.keys(imperfectiveForms.past) as Array<keyof typeof imperfectiveForms.past>).map(key => {
            return (
              <InputContainer key={key + imperfectiveForms.past[key]}>
                <Label>{key}</Label>
                <Input 
                  type="text"
                  name={key}
                  value={impState.past[key]}
                  onChange={(e) => handleChange(e, Tense.PAST, iDispatch)}
                  error={false}
                />
              </InputContainer>
            );
          })}
        </FormGroup>

        <FormGroup width={1/3}>
          {(Object.keys(imperfectiveForms.future) as Array<keyof typeof imperfectiveForms.future>).map(key => {
            return (
              <InputContainer key={key + imperfectiveForms.future[key]}>
                <Label>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  value={impState.future[key]}
                  onChange={(e) => handleChange(e, Tense.FUTURE, iDispatch)}
                  error={false}
                />
              </InputContainer>
            );
          })}
        </FormGroup>
      </FormContainer>

      <VerbHeader
        aspect={'perfective'}
        definition={verb.perfectiveSibling.definition}
        infinitive={verb.perfectiveSibling.infinitive}
      />

      <TenseHeader>
        <TenseLabel>Past</TenseLabel>
        <TenseLabel>Future</TenseLabel>
      </TenseHeader>

      <FormContainer>
        <Box p={3}>
          {(Object.keys(perfectiveForms.past) as Array<keyof typeof perfectiveForms.past>).map(key => {
            return (
              <InputContainer key={key + perfectiveForms.past[key]}>
                <Label>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  value={perState.past[key]}
                  onChange={(e) => handleChange(e, Tense.PAST, pDispatch)}
                  error={false}
                />
              </InputContainer>
            );
          })}
        </Box>

        <Box p={3}>
          {(Object.keys(perfectiveForms.future) as Array<keyof typeof perfectiveForms.future>).map(key => {
            return (
              <InputContainer key={key + perfectiveForms.future[key]}>
                <Label>{key}</Label>
                <Input
                  type="text"
                  name={key}
                  value={perState.future[key]}
                  onChange={(e) => handleChange(e, Tense.FUTURE, pDispatch)}
                  error={false}
                />
              </InputContainer>
            );
          })}
        </Box>
      </FormContainer>
    </QuizContainer>
  );
};

export default Quiz;