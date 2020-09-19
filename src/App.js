import React, { useState } from 'react';

import Home from './pages/Home/Home';
import Hero from './pages/Hero/Hero';

import './App.css';

function App() {
  const [heroID, setHeroID] = useState();

  function handleClick(id) {
    setHeroID(id);
  }

  return (
    <div className="App">
      {heroID ? <Hero heroID={heroID} /> : <Home handleClick={handleClick} />}
    </div>
  );
}

export default App;
