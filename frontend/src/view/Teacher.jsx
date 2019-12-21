import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TeacherTitle from '../components/TeacherTitle';
import TeacherTable from '../components/TeacherTable';

const Teacher = () => {
  const { name } = useParams();
  const [substitutions, setSubstitutions] = useState([]);

  // Here the substituions for the teacher will be downloaded from API
  // Simulated async call
  setTimeout(() => {
    const newSubstitutions = [
      {
        lekcja: '1',
        zamiast: 'Jan Kowalski',
        oddział: '3E',
        przedmiot: 'Pracownia Urządzeń Techniki Komputerowej',
        sala: 'SG1',
        uwagi: 'Brak',
      },
      {
        lekcja: '5',
        zamiast: 'John Doe',
        oddział: '1C',
        przedmiot: 'Sieci Komputerowe',
        sala: '44',
        uwagi: 'Brak',
      },
    ];
    setSubstitutions(newSubstitutions);
  }, 1000);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TeacherTitle title={name} />
      <TeacherTable substitutions={substitutions} />
    </div>
  );
};

export default Teacher;
