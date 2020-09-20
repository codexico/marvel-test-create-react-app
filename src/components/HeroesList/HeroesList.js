import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { apiHeroesList, apiHeroesListOrderByName } from '../../api/api';

import HeroCard from '../HeroCard/HeroCard';

import './HeroesList.css';

function HeroesList({ handleClick }) {
  const [characters, setCharacters] = useState();
  const [ascDesc, setAscDesc] = useState(false);

  useEffect(() => {
    apiHeroesList().then(({ data }) => setCharacters(data));
  }, []);

  function orderByName() {
    apiHeroesListOrderByName(ascDesc).then(({ data }) => setCharacters(data));
    setAscDesc(!ascDesc);
  }

  return (
    <div className="HeroesList">
      <div className="HeroesList-options">
        <button onClick={orderByName}>
          Ordenar por nome - A/Z
      </button>
      </div>
      <div className="HeroesList-cards">
        {characters?.data?.results?.map((character) => (
          <HeroCard
            key={character.id}
            heroID={character.id}
            name={character.name}
            thumbnail={character.thumbnail}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

HeroesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HeroesList;
