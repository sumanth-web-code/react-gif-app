import React from 'react';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div>
      <h1>Random GIF App</h1>
      <div className="main-container">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
