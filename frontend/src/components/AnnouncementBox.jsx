import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Box = styled.div`
  background: #44546C;
  color: #ffffff;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  padding: 20px 40px;
  width: 620px;
  font-size: 16px;
  cursor: pointer;

  margin: 80px 0 20px;

`;

const AnnouncementBox = ({ content }) => (
  <Box>
    {content}
  </Box>
);


export default AnnouncementBox;
