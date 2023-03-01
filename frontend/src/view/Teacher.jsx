import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import TeacherTable from '../components/TeacherTable';
import TableTitle from '../components/TableTitle';
import ErrorMessage from '../components/ErrorMessage';

/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */

const Teacher = () => {
	const { name } = useParams();

	const [substitutions, setSubstitutions] = useState([]);
	const [error, setError] = useState(null);

	// Here the substituions for the teacher will be downloaded from API
	useEffect(() => {
		axios
			.get(`http://localhost:1337/substitutions/teacher/${name}`)
			.then(({ data }) => data.data)
			.then((subs) => subs.sort((a, b) => (a.lesson_id > b.lesson_id ? 1 : -1)))
			.then((subs) => setSubstitutions(subs))
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
			<TableTitle title={name} />
			{error ? (
				<ErrorMessage error={error} />
			) : (
				<TeacherTable substitutions={substitutions} />
			)}
		</div>
	);
};

export default Teacher;
