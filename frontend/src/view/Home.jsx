import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '500px' }}>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
      </div>
    </div>
  );
}

export default Home;
