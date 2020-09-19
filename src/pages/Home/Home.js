import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import HeroesList from '../../components/HeroesList/HeroesList';

import './Home.css';

function Home({ handleClick }) {
  return (
    <div className="Home">
      <Header />
      <Search />
      <HeroesList handleClick={handleClick} />
    </div>
  );
}

Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Home;
