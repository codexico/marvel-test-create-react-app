import React from 'react';
import PropTypes from 'prop-types';

import characters from './data/characters_limit20.json';

import HeroCard from '../HeroCard/HeroCard';

import './HeroesList.css';

function HeroesList({ handleClick }) {
  console.log('characters = ', characters);

  return (
    <div className="HeroesList">
      {characters.data.results.map((character) => (
        <HeroCard
          key={character.id}
          heroID={character.id}
          name={character.name}
          thumbnail={character.thumbnail}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

HeroesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HeroesList;
