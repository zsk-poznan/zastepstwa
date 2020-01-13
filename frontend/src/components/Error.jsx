import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorWrapper = styled.span`
  margin: 10vh 0;
  color: red;
`;

const Error = ({ error }) => (
  <ErrorWrapper>
    <p style={{ fontSize: '2em' }}>Wystąpił błąd!</p>
    <details>
      <summary>Zobacz błąd</summary>
      <p>{error}</p>
    </details>
  </ErrorWrapper>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
