import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

const TeacherTable = ({ substitutions }) => (
  <StyledTable>
    <thead>
      <tr>
        <th style={{ width: '15%' }}>Lekcja</th>
        <th style={{ width: '15%' }}>Zamiast</th>
        <th style={{ width: '15%' }}>Oddział</th>
        <th style={{ width: '25%' }}>Przedmiot</th>
        <th style={{ width: '15%' }}>Sala</th>
        <th style={{ width: '15%' }}>Uwagi</th>
      </tr>
    </thead>
    <tbody>
      {substitutions.map((substitution) => (
        <tr key={substitution.lesson_id}>
          <td>{substitution.lesson_id}</td>
          <td>{substitution.teacher}</td>
          <td>{substitution.group}</td>
          <td>{substitution.lesson_name}</td>
          <td>{substitution.classroom}</td>
          <td>{substitution.notes || 'Brak'}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

TeacherTable.propTypes = {
  substitutions: PropTypes.arrayOf(
    PropTypes.shape({
      lekcja: PropTypes.string,
      zamiast: PropTypes.string,
      oddział: PropTypes.string,
      przedmiot: PropTypes.string,
      sala: PropTypes.string,
      uwagi: PropTypes.string,
    })
  ).isRequired,
};

export default TeacherTable;
