import React from 'react';

import { ReactComponent as SearchIcon } from '../../img/search.svg';

import './Search.css';

function Search() {
  return (
    <div className="Search">
      <form className="Search-form">
        <div className="Search-inputGroup">
          <label htmlFor="" className="Search-label">
            <button className="Search-inputButton">
              <SearchIcon className="Search-inputIcon" />
            </button>
            <input className="Search-input" placeholder="Procure por heróis" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Search;
