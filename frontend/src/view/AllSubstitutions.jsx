import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StyledTable from '../components/StyledTable';
import TeacherTitle from '../components/TeacherTitle';

const url = 'http://localhost:5000';

const AllSubstitutions = () => {
  const [substitutions, setSubstitutions] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/teacher/all`)
      .then(({ data }) => setSubstitutions(data.data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TeacherTitle title="Wszystkie zastępstwa" />
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
    </div>
  );
};

export default AllSubstitutions;
