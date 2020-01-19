import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StyledTable from '../components/StyledTable';
import TableTitle from '../components/TableTitle';
import ErrorMessage from '../components/ErrorMessage';

const AllSubstitutions = () => {
  const [substitutions, setSubstitutions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/teacher/all`)
      .then(({ data }) => setSubstitutions(data.data))
      .catch((err) => setError(String(err)));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TableTitle title="Wszystkie zastępstwa" />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>Lekcja</th>
              <th>Zamiast</th>
              <th>Oddział</th>
              <th>Przedmiot</th>
              <th>Sala</th>
              <th>Uwagi</th>
              <th>Nauczyciel</th>
            </tr>
          </thead>
          <tbody>
            {substitutions.map((substitution) => (
              <tr key={substitution.lesson_id + substitution.teacher}>
                <td>{substitution.lesson_id}</td>
                <td>{substitution.teacher}</td>
                <td>{substitution.group}</td>
                <td>{substitution.lesson_name}</td>
                <td>{substitution.classroom}</td>
                <td>{substitution.notes || 'Brak'}</td>
                <td>{substitution.substitute_teacher}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};

export default AllSubstitutions;
