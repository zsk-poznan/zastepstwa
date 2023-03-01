import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SubstitutionDateWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  font-size: 30px;
`;

const SubstitutionDate = () => {
	const [date, setDate] = useState([]);
	const [error, setError] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/zastepstwas", {
				params: { populate: "*" },
			})
			.then(({ data }) => {
				setCount(data.meta.pagination.total);
				setDate(data.data.at(-1).attributes.date);
			})

			.catch((err) => setError(String(err)));

		const refreshId = setInterval(1000);
		return () => clearInterval(refreshId);
	}, []);

	const subDate = new Date(date);
	const fullSubDate = `${subDate.getDate()}.${subDate.getMonth() +
    1}.${subDate.getFullYear()} r.`;

	return !error ? (
		<>
			<SubstitutionDateWrapper>
				{fullSubDate} 
				{' '}
				{count}
			</SubstitutionDateWrapper>
		</>
	) : ( 
		<>
			<SubstitutionDateWrapper>{error}</SubstitutionDateWrapper>
		</>
	);
};

export default SubstitutionDate;
