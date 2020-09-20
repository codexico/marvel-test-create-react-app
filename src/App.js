import React, { useState, useEffect } from 'react';

import { apiHeroesList, apiHeroSearch } from './api/api';

import Home from './pages/Home/Home';
import Hero from './pages/Hero/Hero';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [heroID, setHeroID] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    apiHeroesList().then(({ data }) => setCharacters(data?.data?.results));
  }, []);

  function handleClick(id) {
    setHeroID(id);
    setPage('hero');
  }

  function handleSearch(name) {
    apiHeroSearch(name).then(({ data }) => setCharacters(data?.data?.results));
    setPage('home');
  }

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} />
      {page !== 'home' ? (
        <Hero heroID={heroID} />
      ) : (
        <Home
          handleClick={handleClick}
          characters={characters}
          setCharacters={setCharacters}
        />
      )}
    </div>
  );
}

export default App;
