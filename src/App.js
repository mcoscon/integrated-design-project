import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from '../src/database/database'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddUser></AddUser>
      </header>
    </div>
  );
}

export default App;
