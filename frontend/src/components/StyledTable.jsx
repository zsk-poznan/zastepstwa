import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  th {
    padding: 0 40px 0 40px;
    border: 1px solid white;
    border-top: none;
    border-bottom: none;
  }

  td {
    padding: 20px 40px 20px 40px;
  }

  thead {
    tr {
      th {
        &:first-child {
          border-left: none;
        }
        &:last-child {
          border-right: none;
        }
      }
    }
  }

  hr {
    width: 100%;
  }
`;

export default StyledTable;
