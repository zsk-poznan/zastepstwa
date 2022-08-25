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
	const [date, setDate] = useState([]);
	const [error, setError] = useState([]);

	const getData = () =>
		axios
			.get(`http://localhost:1337/api/zastepstwas`)
			.then(({ data }) => setDate(data.data))
			.catch((err) => setError(String(err)));

	useEffect(() => {
		getData();
		const refreshId = setInterval(getData, 60000);
		return () => clearInterval(refreshId);
	}, []);

	const today = new Date();
	const todayDate = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

	return (
		<>
			<SubstitutionDateWrapper>
				{error ? (
					todayDate
				) : (
					date
				)}
			</SubstitutionDateWrapper>
		</>
	);

};

export default SubstitutionDate;
