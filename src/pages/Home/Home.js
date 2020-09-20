import React from 'react';
import PropTypes from 'prop-types';

import HeroesList from '../../components/HeroesList/HeroesList';

import './Home.css';

function Home({
  handleClick,
  characters,
  setCharacters,
  handleFavourite,
  favourites,
}) {
  return (
    <div className="Home">
      <HeroesList
        handleClick={handleClick}
        characters={characters}
        setCharacters={setCharacters}
        handleFavourite={handleFavourite}
        favourites={favourites}
      />
    </div>
  );
}

Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
  characters: PropTypes.array,
  setCharacters: PropTypes.func.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
};

export default Home;
