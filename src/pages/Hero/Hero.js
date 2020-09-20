import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { apiHeroByID } from '../../api/api';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import './Hero.css';

function Hero({ heroID }) {
  const [character, setCharacter] = useState();

  useEffect(() => {
    apiHeroByID(heroID).then(({ data }) => setCharacter(data.data.results[0]));
  }, [heroID]);

  return (
    <div className="Hero">
      <Header />
      <Search />
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>{character.description}</p>
          <img
            src={`${character.thumbnail.path}/detail.${character.thumbnail.extension}`}
            alt={character.name}
          />

          <p>Quadrinhos {character.comics.available}</p>

          <p>Últimos lançamentos</p>
          {character.comics.items.map((comic, i) => {
            return (
              <div key={`comic-${heroID}-${i}`}>
                <p>{comic.name}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

Hero.propTypes = {
  heroID: PropTypes.number.isRequired,
};

export default Hero;
