import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

interface Props {
  aspect: 'imperfective' | 'perfective';
  infinitive: string;
  definition: string;
}

const Header = styled(Flex)`
  flex-direction: column;
  text-align: center;
`;

const Aspect = styled.span`
  font-family: monospace;
  opacity: .4;
  font-size: 12px;
`;

const Infinitive = styled.h1`
  font-weight: 100;
  font-size: 50px;
  font-family: ${props => props.theme.fonts.courierNew};
`;  

const Definition  = styled.p`
  font-size: 15px;
  text-transform: lowercase;
  letter-spacing: 1px;
  padding-top: ${props => props.theme.space[1]}px;
`;

const VerbHeader: React.FC<Props> = (props) => {
  return(
    <Header>
      <Aspect>
        {props.aspect}
      </Aspect>
      <Infinitive>
        {props.infinitive}
      </Infinitive>
      <Definition>
        {props.definition}
      </Definition>
    </Header>
  );
};

export default VerbHeader;