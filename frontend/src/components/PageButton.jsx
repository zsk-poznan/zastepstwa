import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPageButton = styled.button`
    background: #44546C;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    padding: 20px 40px;
    width: 100%;
    cursor: pointer;
    margin: 5px 0 0;
    font-family: 'Poppins', sans-serif;

    &:focus {
        background: #6d7e98;
    }

    &:first-child {
        margin-right: 5px;
    }

    &[disabled] {
        opacity: 0.5;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 620px;
`

/* eslint-disable-next-line react/jsx-props-no-spreading */

const PageButton = ({ children, ...props }) => (
	<StyledPageButton {...props}>
		{children}
	</StyledPageButton>
);

PageButton.defaultProps = {
	children: PropTypes.any,
}

export default PageButton;