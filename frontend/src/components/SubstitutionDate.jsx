import React from "react";
import axios from "axios";
import styled from "styled-components";
import useSWR from "swr";

const SubstitutionDateWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  font-size: 30px;
`;

const fetcher = (url) => axios.get(url).then((res) => res.data);
const API = "/api/date";

const SubstitutionDate = () => {
  const { data, error } = useSWR(API, fetcher);

  if (error)
    return (
      <SubstitutionDateWrapper>
        <p style={{ color: "red", fontSize: "16px" }}>
          Nie udało się pobrać daty
        </p>
      </SubstitutionDateWrapper>
    );

  if (!data)
    return <SubstitutionDateWrapper>Ładowanie...</SubstitutionDateWrapper>;

  return <SubstitutionDateWrapper>{data.date}</SubstitutionDateWrapper>;
};

export default SubstitutionDate;
