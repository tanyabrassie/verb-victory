import * as React from 'react';
import {Flex} from 'rebass';

const NoSelectionsPrompt: React.FC = () => {
  return (
    <Flex justifyContent="center">
      Select a verb from your list to start quizzing.
    </Flex>
  );
};

export default NoSelectionsPrompt;