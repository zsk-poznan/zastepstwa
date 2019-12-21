import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ArrowBack from '../assets/arrow-back.svg';

const TeacherTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 45px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 48px;
`;

const StyledLink = styled(Link)`
  margin-right: 70px;
  display: block;
  height: 30px;
`;

const TeacherTitle = ({ title }) => (
  <TeacherTitleWrapper>
    <StyledLink to="/">
      <img src={ArrowBack} alt="Powrót" height="30" />
    </StyledLink>
    <H2>{ title }</H2>
  </TeacherTitleWrapper>
);

TeacherTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TeacherTitle;
