import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo-zsk.svg';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  padding: 20px;

  * {
    margin: auto 10px;
  }
`;

const ImageWrapper = styled.img`
  height: 60px;
`;

const Header = () => (
  <HeaderWrapper>
    <ImageWrapper src={logo} alt="ZSK" />
    <h1>Zastępstwa</h1>
  </HeaderWrapper>
);

export default Header;
