import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AnnouncementBox from "../components/AnnouncementBox";
import AnnouncementTitle from "../components/AnnouncementTitle";
import PageButton, { Wrapper } from "../components/PageButton";

const Announcement = () => {
	const [announcements, setAnnouncements] = useState([]);
	const [error, setError] = useState(null);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/aktualnoscis")
			.then(({ data }) => {
				setCount(data.meta.pagination.total);
				setAnnouncements(data.data);
			})
			.catch((err) => setError(String(err)));
	}, []);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{announcements.length > 0 ? (
				<>
					<AnnouncementTitle
						title={announcements[currentIndex].attributes.title}
					/>
					<Wrapper>
						<PageButton onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)} disabled={currentIndex === 0}>
							Poprzednie
						</PageButton>
						<PageButton
							onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
							disabled={currentIndex === count - 1}
						>
							Następne
						</PageButton>
					</Wrapper>
					<AnnouncementBox
						content={announcements[currentIndex].attributes.content}
					/>
				</>
			) : (
				`Nie znaleziono żadnych ogłoszeń.`
			)}
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
				style={{ marginTop: "30px", marginBottom: "40px" }}
			>
				Strona główna
			</Link>
		</div>
	);
};

export default Announcement;
