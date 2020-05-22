import * as React from 'react';
import {Verb, Persons, Tense} from '../../data/types';
import {Flex, Box} from 'rebass';
import {useReducer} from 'react';
import Input from '../ui/Input';
import VerbHeader from './VerbHeader';
import styled from 'styled-components';

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

  const [state, dispatch] = useReducer(reduce, changeset);

  // initial state = changes
  const handleImpChange = (e:  React.ChangeEvent<HTMLInputElement>, tense: Tense) => {
    dispatch({
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
      <Flex>
        <Box p={3}>
          <div>Present</div>

          
          {(Object.keys(imperfectiveForms.present) as Array<keyof typeof imperfectiveForms.present>).map(key => {
            return(
              <>
                <div key={key + imperfectiveForms.present[key]}>{key}</div>
                <Input
                  type="text"
                  name={key}
                  value={state.present[key]}
                  onChange={(e) => handleImpChange(e, Tense.PRESENT)}
                  error={hasError(state.present[key], imperfectiveForms.present[key])}
                />
              </>
            );
          })}
        </Box>

        <Box p={3}>
          <div>Past</div>
          {(Object.keys(imperfectiveForms.past) as Array<keyof typeof imperfectiveForms.past>).map(key => {
            return (
              <>
                <div>{key}</div>
                <Input 
                  type="text"
                  name={key}
                  value={state.past[key]}
                  onChange={(e) => handleImpChange(e, Tense.PAST)}
                  error={false}
                />
              </>
            );
          })}
        </Box>

        <Box p={3}>
          <div>Future</div>
          {(Object.keys(imperfectiveForms.future) as Array<keyof typeof imperfectiveForms.future>).map(key => {
            return (
              <>
                <div>{key}</div>
                <Input
                  type="text"
                  name={key}
                  value={state.future[key]}
                  onChange={(e) => handleImpChange(e, Tense.FUTURE)}
                  error={false}
                />
              </>
            );
          })}
        </Box>
      </Flex>

      <Flex>
        {verb.perfectiveSibling.infinitive} - {verb.definition}
        <Box p={3}>
          <div>Future</div>
          {(Object.keys(perfectiveForms.future) as Array<keyof typeof perfectiveForms.future>).map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{perfectiveForms.future[key]}</div>
              </>
            );
          })}
        </Box>

        <Box p={3}>
          <div>Past</div>
          {(Object.keys(perfectiveForms.past) as Array<keyof typeof perfectiveForms.past>).map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{perfectiveForms.past[key]}</div>
              </>
            );
          })}
        </Box>
      </Flex>
    </QuizContainer>
  );
};

export default Quiz;