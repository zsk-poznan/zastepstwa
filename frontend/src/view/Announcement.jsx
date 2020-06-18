import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import AnnouncementBox from '../components/AnnouncementBox';
import ErrorMessage from '../components/ErrorMessage';

const Announcement = () => {
  const [announcement, setAnnouncement] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/announcements')
      .then(({ data }) => setAnnouncement(data[0].text))
      .catch((err) => setError(String(err)));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AnnouncementBox content={announcement} />

      <Link
        to="/"
        className="anchor"
        style={{ marginTop: '20px', marginBottom: '40px' }}
      >
        Strona główna
      </Link>
    </div>
  );
};

export default Announcement;
