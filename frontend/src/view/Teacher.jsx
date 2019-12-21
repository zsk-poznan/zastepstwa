import React from 'react';
import { useParams } from 'react-router-dom';
import TeacherTitle from '../components/TeacherTitle';

const Teacher = () => {
  const { name } = useParams();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TeacherTitle title={name} />
    </div>
  );
};

export default Teacher;
