import React from 'react';
import PropTypes from 'prop-types';

import HeroesList from '../../components/HeroesList/HeroesList';

import './Home.css';

function Home({ handleClick, characters, setCharacters }) {
  return (
    <div className="Home">
      <HeroesList
        handleClick={handleClick}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
}

Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
  characters: PropTypes.array,
  setCharacters: PropTypes.func.isRequired,
};

export default Home;
