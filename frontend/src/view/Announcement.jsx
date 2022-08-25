import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AnnouncementBox from '../components/AnnouncementBox';
import AnnouncementTitle from '../components/AnnouncementTitle';
import PageButton, { Wrapper } from '../components/PageButton';

/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */

const Announcement = () => {
	const [announcements, setAnnouncements] = useState([]);
	const [error, setError] = useState(null);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get('http://localhost:1337/api/aktualnoscis')
			.then(({ data }) => {
				setCount(data.meta.pagination.total)
				setAnnouncements(data.data)
			})
			.catch((err) => setError(String(err)));
	}, []);

	// console.log(announcements[currentIndex])

    function AnnouncementsContainer () {
      function handlePagePrev () {
        setCurrentIndex((prevIndex) => prevIndex - 1)
      }
      
      function handlePageNext () {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }

      switch(announcements.length > 0) {
        case true: 
          return(
            <>
              <AnnouncementTitle title={announcements[currentIndex].attributes.title} />
              <Wrapper>
                <PageButton onClick={handlePagePrev} disabled={currentIndex === 0}>Poprzednie</PageButton>
                <PageButton onClick={handlePageNext} disabled={currentIndex === count - 1}>Następne</PageButton>
              </Wrapper>
              <AnnouncementBox content={announcements[currentIndex].attributes.content} />
            </>
          );
        default:
          return `Nie znaleziono żadnych ogłoszeń.`
      }
    }

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>

    <AnnouncementsContainer />
      <p
        style={{
          color: "#da4f49",
        }}
      >
        {error}
      </p>

			<Link
				to="/"
				className="anchor"
				style={{ marginTop: '30px', marginBottom: '40px' }}
			>
				Strona główna
			</Link>
		</div>
	);
};

export default Announcement;
