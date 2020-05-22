import * as React from 'react';
import {Flex, Image} from 'rebass';
import styled from 'styled-components';
import logo from '../images/verb-victory-logo.svg';

const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const Logo = styled(Image)`
  width: 100px;
`;

function Header() {
  return(
    <Container>
      <Logo src={logo}/>
    </Container>
  );
}

export default Header;