import React from 'react';
import {
  cleanup,
  render,
  waitForElement,
  fireEvent,
} from '@testing-library/react';

import data from './data/characters_limit20.json';
import dataOrder from './data/characters_order-name.json';

import { apiHeroesListOrderByName } from '../../api/api';

jest.mock('../../api/api');

import HeroesList from './HeroesList';

afterEach(() => {
  apiHeroesListOrderByName.mockClear();
  cleanup();
});

test('Component renders correctly empty', async () => {
  const { asFragment, getByText } = render(
    <HeroesList
      handleClick={() => {}}
      handleFavourite={() => {}}
      setCharacters={() => {}}
      characters={[]}
      favourites={[]}
    />
  );

  const notFound = await waitForElement(() =>
    getByText('Nenhum personagem encontrado.')
  );

  expect(notFound).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('Component renders correctly with heroes', async () => {
  const { asFragment, getByText } = render(
    <HeroesList
      handleClick={() => {}}
      handleFavourite={() => {}}
      setCharacters={() => {}}
      characters={data.data.results}
      favourites={[]}
    />
  );

  const hero = await waitForElement(() => getByText('Hulk'));

  expect(hero).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('Component reorders', async () => {
  const setCharacters = jest.fn();
  const { getByText } = render(
    <HeroesList
      handleClick={() => {}}
      handleFavourite={() => {}}
      setCharacters={setCharacters}
      characters={data.data.results}
      favourites={[]}
    />
  );

  apiHeroesListOrderByName.mockResolvedValueOnce({ data: dataOrder });
  const orderButton = await waitForElement(() =>
    getByText('Ordenar por nome - A/Z')
  );
  fireEvent.click(orderButton);

  await waitForElement(() => getByText('Hulk'));

  expect(apiHeroesListOrderByName).toHaveBeenCalledTimes(1);
  expect(apiHeroesListOrderByName).toHaveBeenCalledWith(false);
  expect(setCharacters).toHaveBeenCalledTimes(1);
  expect(setCharacters).toHaveBeenCalledWith(dataOrder.data.results);
});
