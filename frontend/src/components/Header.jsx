import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo-zsk.svg';

const HeaderWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: fit-content;
  text-decoration: none;

  * {
    margin: auto 10px;
  }
`;

const AppName = styled.h1`
  color: white;
`;

const ImageWrapper = styled.img`
  height: 60px;
`;

const Header = () => (
  <header>
    <HeaderWrapper to="/">
      <ImageWrapper src={logo} alt="ZSK" />
      <AppName>Zastępstwa</AppName>
    </HeaderWrapper>
  </header>
);

export default Header;
