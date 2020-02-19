import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StyledTable from '../components/StyledTable';
import TableSeparator from '../components/TableSeparator';
import TableTitle from '../components/TableTitle';
import ErrorMessage from '../components/ErrorMessage';

import SubstitutionDate from '../components/SubstitutionDate'

const AllSubstitutions = () => {
  const [substitutions, setSubstitutions] = useState([]);
  const [error, setError] = useState(null);
  let prevTeacher = '';

  useEffect(() => {
    axios
      .get(`/api/teacher/all`)
      .then(({ data }) => setSubstitutions(data.data))
      .catch((err) => setError(String(err)));
  }, []);

  const generateLessonRow = (s) => {
    const row = (
      <tr key={s.lesson_id + s.teacher}>
        <td>{s.lesson_id}</td>
        <td>{s.teacher}</td>
        <td>{s.group}</td>
        <td>{s.lesson_name}</td>
        <td>{s.classroom}</td>
        <td>{s.notes || 'Brak'}</td>
        <td>{s.substitute_teacher}</td>
      </tr>
    );
    if (prevTeacher === '' || s.substitute_teacher === prevTeacher) {
      prevTeacher = s.substitute_teacher;
      return row;
    }
    prevTeacher = s.substitute_teacher;
    return (
      <>
        <TableSeparator />
        {row}
      </>
    );
  };

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
          <tbody>{substitutions.map(generateLessonRow)}</tbody>
        </StyledTable>
      )}
      <SubstitutionDate />
    </div>
  );
};

export default AllSubstitutions;
