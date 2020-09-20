import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../img/logo.svg';

import './Header.css';

function Header({ setPage }) {
  return (
    <div className="Header">
      <Logo
        className="Header-logo"
        title="Marvel - Search heroes"
        onClick={() => setPage('home')}
      />
      <h2 className="Header-title">EXPLORE O UNIVERSO</h2>
      <h3 className="Header-subtitle">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </h3>
    </div>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;
