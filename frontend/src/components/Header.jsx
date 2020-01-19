import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo-zsk.svg';

const HeaderLink = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: fit-content;
  text-decoration: none;
  color: white;

  * {
    margin: auto 10px;
  }
`;

const ImageWrapper = styled.img`
  height: 60px;
`;

const Header = () => (
  <header>
    <HeaderLink to="/">
      <ImageWrapper src={logo} alt="ZSK" />
      <h1>Zastępstwa</h1>
    </HeaderLink>
  </header>
);

export default Header;
