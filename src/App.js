import React from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import HeroesList from './components/HeroesList/HeroesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <HeroesList />
    </div>
  );
}

export default App;
