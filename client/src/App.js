import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ padding: '5%', backgroundColor: 'lightgreen'}} className="header">
        <h1>Welcome</h1>
      </div>
      <div className="nav">
        <Link to="/login">Login</Link>
      </div>

    </div>
  );
}

export default App;
