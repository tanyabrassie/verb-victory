import * as React from 'react';
import {Verb, Persons, PERSONS} from '../../data/types';
import {Flex, Box} from 'rebass';
import { useState } from 'react';

interface Props {
  verb: Verb;
}

interface ImpChangeset {
  present: Persons;
  past: Persons;
  future: Persons;
}

interface PerChangeset {
  present: Persons;
  past: Persons;
  future: Persons;
}

const Quiz: React.FC<Props> = ({verb}) => {

  const imperfectiveForms = verb.conjugation;
  const perfectiveForms = verb.perfectiveSibling.conjugation;

  const [ImpChangeset, updateImpChangeset] = useState<ImpChangeset>();
  const [PerChangeset, updatePerChangeset] = useState<PerChangeset>();

  //imperfective changeset
  // perfective changeset

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