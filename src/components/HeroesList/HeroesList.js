import React from 'react';

import characters from './data/characters_limit20.json';

import HeroCard from '../HeroCard/HeroCard';

import './HeroesList.css';

function HeroesList() {
  console.log('characters = ', characters);

  return (
    <div className="HeroesList">
      {characters.data.results.map((character) => (
        <HeroCard
          key={character.id}
          name={character.name}
          thumbnail={character.thumbnail}
        />
      ))}
    </div>
  );
}

export default HeroesList;
