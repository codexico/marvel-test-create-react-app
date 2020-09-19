import React from 'react';

import { ReactComponent as Logo } from '../../img/logo.svg';

import './Header.css';

function Header() {
  return (
    <div className="Header">
      <Logo title="Marvel - Search heroes" />
      <h2 className="Header-title">EXPLORE O UNIVERSO</h2>
      <h3 className="Header-subtitle">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </h3>
    </div>
  );
}

export default Header;
