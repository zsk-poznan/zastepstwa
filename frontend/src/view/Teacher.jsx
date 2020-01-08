import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TeacherTitle from '../components/TeacherTitle';
import TeacherTable from '../components/TeacherTable';

const url = 'http://localhost:5000';

const Teacher = () => {
  const { name } = useParams();

  const [substitutions, setSubstitutions] = useState([]);
  const [error, setError] = useState(null);

  // Here the substituions for the teacher will be downloaded from API
  // Simulated async call
  useEffect(() => {
    axios
      .get(`${url}/api/teacher/${name}`)
      .then(({ data }) => setSubstitutions(data.data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TeacherTitle title={name} />
      {error ? (
        <span style={{ color: 'red' }}>Wystąpił błąd!</span>
      ) : (
        <TeacherTable substitutions={substitutions} />
      )}
    </div>
  );
};

export default Teacher;
