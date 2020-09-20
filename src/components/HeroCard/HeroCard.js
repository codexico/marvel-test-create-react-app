import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as HeartIcon } from '../../img/heart.svg';
import { ReactComponent as FavIcon } from '../../img/fav.svg';

import './HeroCard.css';

function HeroCard({
  heroID,
  name,
  thumbnail,
  handleClick,
  handleFavourite,
  favourite,
}) {
  function handleFavClick(e) {
    e.preventDefault();
    e.stopPropagation();
    handleFavourite(heroID, !favourite);
  }

  return (
    <div className="HeroCard" onClick={() => handleClick(heroID)}>
      <img
        className="HeroCard-img"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <div className="HeroCard-info">
        <p className="HeroCard-name">{name}</p>
        <button
          className="HeroCard-fav"
          type="button"
          onClick={(e) => handleFavClick(e)}
        >
          {favourite ? (
            <FavIcon className="HeroCard-icon" aria-label="Herói favorito" />
          ) : (
            <HeartIcon
              className="HeroCard-icon"
              aria-label="Clique para favoritar"
            />
          )}
        </button>
      </div>
    </div>
  );
}

HeroCard.propTypes = {
  heroID: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  favourite: PropTypes.bool.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroCard;
