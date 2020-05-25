import * as React from 'react';
import {Flex, Image, Box} from 'rebass';
import styled from 'styled-components';
import logo from '../images/verb-victory-logo.svg';
import { dramaticTextStyle } from './ui/typography';

const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
  position: relative;
`;

const Logo = styled(Image)`
  width: 120px;
`;

const Text = styled.span`
  line-height: 1.5;
  color: ${props => props.theme.colors.red};
  display: block;
  margin: 4px;
  ${dramaticTextStyle};
  font-size: 11px;
  padding: 0 ${props => props.theme.space[2]}px;
`;

const Promo = styled(Box)`
  position: absolute;
  right: 0;
`;

function Header() {
  return(
    <Container>
      <Logo src={logo}/>
      <Promo>
        <Text>test russian verb</Text>
        <Text>conjugations online!</Text>
      </Promo>
    </Container>
  );
}

export default Header;