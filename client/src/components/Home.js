import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div style={{ padding: '5%', backgroundColor: 'lightgreen', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-around'}} className="header">
        <h1>Welcome</h1>
        <div style={{ width: '25%', display: 'flex', justifyContent: 'space-evenly', textDecoration: 'none', color: 'black'}} className="nav">
          <Link style={{textDecoration: 'none', color: 'black', border: '1px solid', padding: '1rem' }} to="/">Home</Link>
          <Link style={{textDecoration: 'none', color: 'black', border: '1px solid', padding: '1rem' }} to="/login">Login</Link>
          <Link style={{textDecoration: 'none', color: 'black', border: '1px solid', padding: '1rem' }} to="/register">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;