import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { apiHeroesList } from '../../api/api';

import HeroCard from '../HeroCard/HeroCard';

import './HeroesList.css';

function HeroesList({ handleClick }) {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    apiHeroesList().then(({ data }) => setCharacters(data));
  }, []);

  return (
    <div className="HeroesList">
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
  );
}

HeroesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HeroesList;
