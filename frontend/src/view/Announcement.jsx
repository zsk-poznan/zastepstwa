import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import AnnouncementBox from '../components/AnnouncementBox';
import ErrorMessage from '../components/ErrorMessage';
import AnnouncementTitle from '../components/AnnouncementTitle';

const Announcement = () => {
  const [announcement, setAnnouncement] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/announcements?active=true')
      .then(({ data }) => setAnnouncement(data[0]))
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
      <AnnouncementTitle title={announcement.name} />

      <AnnouncementBox content={announcement.text} />

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
