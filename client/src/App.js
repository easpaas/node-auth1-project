import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home.js';
import Login from './components/Login.js'; 
import Register from './components/Register.js';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
