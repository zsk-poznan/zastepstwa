import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.span`
  margin: 10vh 0;
  color: red;
  font-size: 2em;
`;

const Error = () => <ErrorWrapper>Wystąpił błąd!</ErrorWrapper>;

export default Error;
