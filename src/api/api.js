import axios from 'axios';

import { handleError } from './api-utils';

const apikey = process.env.REACT_APP_API_KEY;
const path = 'https://gateway.marvel.com:443/v1/public/characters';

export const apiHeroesList = () => {
  const url = `${path}?apikey=${apikey}`;

  return axios.get(url).catch((err) => handleError(err));
};

export const apiHeroesListOrderByName = (order = true) => {
  const orderBy = `orderBy=${order ? '' : '-'}name&`;
  const url = `${path}?${orderBy}limit=20&apikey=${apikey}`;

  return axios.get(url).catch((err) => handleError(err));
};

export const apiHeroByID = (heroID) => {
  const url = `${path}/${heroID}?apikey=${apikey}`;

  return axios.get(url).catch((err) => handleError(err));
};

export const apiHeroSearch = (name) => {
  const url = `${path}?name=${name}&apikey=${apikey}`;

  return axios.get(url).catch((err) => handleError(err));
};
