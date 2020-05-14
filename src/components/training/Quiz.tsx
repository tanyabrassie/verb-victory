import * as React from 'react';
import {Verb, Persons, PERSONS} from '../../data/types';
import {Flex, Box} from 'rebass';
import {useReducer} from 'react';
import Input from '../Input';

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


const reduce = (state: any, action: any) => {
  switch (action.type) {
  case 'present':
    return {
      ...state,
      present: {...state.present, [action.name]: action.value},
    };
  case 'past':
    return {
      ...state,
      past: {...state.past, [action.name]: action.value},
    };
  case 'future':
    return {
      ...state,
      future: {...state.future, [action.name]: action.value},
    };
  } 
};


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

  const changeset = {
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
  const handleImpChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    console.log(e.currentTarget.value);
    dispatch({
      type: e.target.id,
      value: e.target.value,
      name: e.target.name,
    });
  };

  console.log(state);

  return(
    <div>
      {verb.infinitive} - {verb.definition}

      <Flex>
        <Box p={3}>
          <div>Present</div>
          {PERSONS.map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{imperfectiveForms.present[key as keyof Persons]}</div>
                <Input
                  id={'present'}
                  type="text"
                  name={key}
                  value={state.present[key as keyof Persons]}
                  onChange={(e) => handleImpChange(e)}
                  error={false}
                />
              </>
            );
          })}
        </Box>

        <Box p={3}>
          <div>Past</div>
          {PERSONS.map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{imperfectiveForms.past[key as keyof Persons]}</div>
                <Input 
                  id={'past'}
                  type="text"
                  name={key}
                  value={state.past[key as keyof Persons]}
                  onChange={(e) => handleImpChange(e)}
                  error={false}
                />
              </>
            );
          })}
        </Box>

        <Box p={3}>
          <div>Future</div>
          {PERSONS.map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{imperfectiveForms.future[key as keyof Persons]}</div>
                <Input
                  id={'future'}
                  type="text"
                  name={key}
                  value={state.future[key as keyof Persons]}
                  onChange={(e) => handleImpChange(e)}
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
          {PERSONS.map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{perfectiveForms.future[key as keyof Persons]}</div>
              </>
            );
          })}
        </Box>

        <Box p={3}>
          <div>Past</div>
          {PERSONS.map(key => {
            return (
              <>
                <div>{key}</div>
                <div>{perfectiveForms.past[key as keyof Persons]}</div>
              </>
            );
          })}
        </Box>
      </Flex>
    </div>
  );
};

export default Quiz;