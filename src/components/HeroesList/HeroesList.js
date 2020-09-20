import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { apiHeroesListOrderByName } from '../../api/api';

import HeroCard from '../HeroCard/HeroCard';

import './HeroesList.css';

function HeroesList({ handleClick, characters, setCharacters, handleFavourite, favourites }) {
  const [ascDesc, setAscDesc] = useState(false);

  function orderByName() {
    apiHeroesListOrderByName(ascDesc).then(({ data }) => setCharacters(data?.data?.results));
    setAscDesc(!ascDesc);
  }

  function isFavourite(id) {
    return favourites.includes(id)
  }

  return (
    <div className="HeroesList">
      {characters?.length === 0 &&
        <p>Nenhum personagem encontrado.</p>
      }
      <div className="HeroesList-options">
        <button onClick={orderByName}>
          Ordenar por nome - A/Z
      </button>
      </div>
      <div className="HeroesList-cards">
        {characters?.map((character) => (
          <HeroCard
            key={character.id}
            heroID={character.id}
            name={character.name}
            thumbnail={character.thumbnail}
            handleClick={handleClick}
            handleFavourite={handleFavourite}
            favourite={isFavourite(character.id)}
          />
        ))}
      </div>
    </div>
  );
}

HeroesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  characters: PropTypes.array,
  favourites: PropTypes.array.isRequired,
  setCharacters: PropTypes.func.isRequired,
  handleFavourite: PropTypes.func.isRequired,
};

export default HeroesList;
