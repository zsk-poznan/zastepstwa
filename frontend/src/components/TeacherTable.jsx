import React from 'react';
import PropTypes from 'prop-types';

import StyledTable from './StyledTable';

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
