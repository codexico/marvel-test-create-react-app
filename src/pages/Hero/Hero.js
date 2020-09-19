import React from 'react';
import PropTypes from 'prop-types';

import data from './data/minimal.json';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import './Hero.css';

function Hero({ heroID }) {
  const character = data.data.results[0];
  return (
    <div className="Hero">
      <Header />
      <Search />
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
    </div>
  );
}

Hero.propTypes = {
  heroID: PropTypes.number.isRequired,
};

export default Hero;
