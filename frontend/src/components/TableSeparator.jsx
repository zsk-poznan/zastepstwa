import React from 'react';
import styled from 'styled-components';

const TableSeparatorWrapper = styled.tr`
  background: white;
  height: 1px;

  td {
    padding: 0;
  }
`;

const TableSeparator = () => (
  <TableSeparatorWrapper>
    <td colSpan="1024" />
  </TableSeparatorWrapper>
);

export default TableSeparator;
