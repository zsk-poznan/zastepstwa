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

  useEffect(() => {
    axios
      .get(`/api/date`)
      .then(({ data }) => setDate(data.date))
      .catch((err) => err);
  }, []);

  return (
    <>
      <SubstitutionDateWrapper>
        {date}
      </SubstitutionDateWrapper>
    </>
  );
};

export default SubstitutionDate;
