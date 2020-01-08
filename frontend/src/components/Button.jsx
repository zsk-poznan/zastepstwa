import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.button`
  background: #4e5e76;
  color: #ffffff;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  width: 100%;
  cursor: pointer;

  margin: 10px;

  &:hover {
    /*background: #5d6e88;*/
  }

  &:focus {
    background: #6d7e98;
  }
`;

const Button = ({ children, redirect }) => (
  <Link to={redirect}>
    <ButtonWrapper>{children}</ButtonWrapper>
  </Link>
);

Button.propTypes = {
  redirect: PropTypes.string,
};

Button.defaultProps = {
  redirect: '/',
};

export default Button;
