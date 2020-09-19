import React from 'react';
import PropTypes from 'prop-types';

import './HeroCard.css';

function HeroCard({ name, thumbnail }) {
  return (
    <div className="HeroCard">
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
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroCard;
