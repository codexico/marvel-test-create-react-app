import React from 'react';
import PropTypes from 'prop-types';

import './HeroCard.css';

function HeroCard({ heroID, name, thumbnail, handleClick }) {
  return (
    <div className="HeroCard" onClick={() => handleClick(heroID)}>
      <img
        className="HeroCard-img"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
      />
      <p className="HeroCard-name">{name}</p>
    </div>
  );
}

HeroCard.propTypes = {
  heroID: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroCard;
