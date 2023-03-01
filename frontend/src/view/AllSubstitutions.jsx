import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageButton from '../components/PageButton';
import StyledTable from '../components/StyledTable';
import TableSeparator from '../components/TableSeparator';
import TableTitle from '../components/TableTitle';
import ErrorMessage from '../components/ErrorMessage';

const AllSubstitutions = () => {
	const [substitutions, setSubstitutions] = useState([]);
	const [error, setError] = useState(null);
	let prevTeacher = '';

	const [currentIndex, setCurrentIndex] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get(`http://localhost:1337/api/zastepstwas`)
			.then(({ data }) => {
				setCount(data.meta.pagination.total)
				setSubstitutions(data.data.at(-1).attributes.file.data.at(-1).url)
			})
			.catch((err) => setError(String(err)));
	}, []);

	function handlePagePrev () {
		setCurrentIndex((prevIndex) => prevIndex - 1)
	}
	  
	function handlePageNext () {
		setCurrentIndex((prevIndex) => prevIndex + 1)
	}

	const generateLessonRow = (s) => {

		const row = (
			<tr key={s.lesson_id + s.teacher}>
				<td>{s.lesson_id}</td>
				<td>{s.teacher}</td>
				<td>{s.group}</td>
				<td>{s.lesson_name}</td>
				<td>{s.classroom}</td>
				<td>{s.notes || 'Brak'}</td>
				<td>{s.substitute_teacher}</td>
			</tr>
		);
		if (prevTeacher === '' || s.substitute_teacher === prevTeacher) {
			prevTeacher = s.substitute_teacher;
			return row;
		}
		prevTeacher = s.substitute_teacher;
		return (
			<>
				<TableSeparator />
				{row}
			</>

		);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{substitutions}
			<TableTitle title="Wszystkie zastępstwa" />
			{error ? (
				<ErrorMessage error={error} />
			) : (
				<>
					<StyledTable>
						<thead>
							<tr>
								<th>Lekcja</th>
								<th>Zamiast</th>
								<th>Oddział</th>
								<th>Przedmiot</th>
								<th>Sala</th>
								<th>Uwagi</th>
								<th>Nauczyciel</th>
							</tr>
						</thead>
						<tbody />
					</StyledTable>
					{substitutions[currentIndex]}
					<PageButton onClick={handlePagePrev} disabled={currentIndex === 0}>Poprzednie</PageButton>
					<PageButton onClick={handlePageNext} disabled={currentIndex === count - 1}>Następne</PageButton>
				</>
			)}
		</div>
	);
};

export default AllSubstitutions;
