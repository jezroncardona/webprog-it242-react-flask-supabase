import React from 'react';
import Guestbook from './Guestbook';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>My Personal Profile</h1>
      </header>
      <Guestbook />
    </div>
  );
}

export default App;
