import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
	const [teachers, setTeachers] = useState([]);
	const [error, setError] = useState(null);

	const getData = () =>
		axios
			.get(`http://localhost:1337/substitutions/teachers`)
			.then(({ data }) => setTeachers(data.data.map((name) => ({ name }))))
			.catch((err) => setError(String(err)));

	useEffect(() => {
		getData();
		const refreshId = setInterval(getData, 60000);
		return () => clearInterval(refreshId);
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{error ? (
				<ErrorMessage error={error} />
			) : (
				<div style={{ maxWidth: '500px' }}>
					{teachers.map((teacher, i) => (
						<Button
							key={encodeURI(`${teacher.name}_${i}`)}
							redirect={`/teacher/${teacher.name}`}
						>
							{teacher.name}
						</Button>
					))}
				</div>
			)}
			<Link
				to="/all"
				className="anchor"
				style={{ marginTop: '20px', marginBottom: '40px' }}
			>
				Wszystkie zastępstwa
			</Link>
		</div>
	);
};

export default Home;
