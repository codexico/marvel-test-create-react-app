import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from '../../img/search.svg';

import './Search.css';

function Search({ handleSearch }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      handleSearch(value.trim());
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="Search">
      <form className="Search-form" onSubmit={handleSubmit}>
        <div className="Search-inputGroup">
          <label htmlFor="" className="Search-label">
            <button className="Search-inputButton" type="button">
              <SearchIcon className="Search-inputIcon" />
            </button>
            <input
              className="Search-input"
              placeholder="Procure por heróis"
              value={value}
              onChange={handleChange}
              maxLength={200}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
