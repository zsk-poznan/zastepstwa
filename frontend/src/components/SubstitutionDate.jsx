import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SubstitutionDateWrapper = styled.div`
  position: absolute; 
  top: 0;
  right: 0;
  margin: 30px;
  font-size: 30px;
`;

const SubstitutionDate = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const getData = () =>
    axios
      .get(`http://localhost:1337/substitutions/date`)
      .then(({ data }) => setDate(data.date))
      .catch((err) => setError(String(err)));

  useEffect(() => {
    getData();
    const refreshId = setInterval(getData, 60000);
    return () => clearInterval(refreshId);
  }, []);

  return (
    <>
      <SubstitutionDateWrapper>
        {error ? (
          <p style={{ color: 'red', fontSize: '16px' }}>Nie udało się pobrać daty</p>
        ) : (
          date
        )}
      </SubstitutionDateWrapper>
    </>
  );

};

export default SubstitutionDate;
