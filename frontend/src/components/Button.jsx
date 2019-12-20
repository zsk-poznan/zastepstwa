import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: #4e5e76;
  color: #ffffff;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  width: 100%;

  margin: 10px;

  &:hover {
    background: #5d6e88;
  }

  &:focus {
    background: #6d7e98;
  }
`;

const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>;

export default Button;
