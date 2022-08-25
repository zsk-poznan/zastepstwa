import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 48px;
  margin-top: -3px;
`;

const AnnouncementTitle = ({ title }) => (
	<H2>{title}</H2>
);

AnnouncementTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default AnnouncementTitle;
