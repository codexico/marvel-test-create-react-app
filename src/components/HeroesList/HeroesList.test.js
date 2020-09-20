import React from 'react';
import {
  cleanup,
  render,
  waitForElement,
  fireEvent,
} from '@testing-library/react';

import data from './data/characters_limit20.json';
import dataOrder from './data/characters_order-name.json';

import { apiHeroesList, apiHeroesListOrderByName } from '../../api/api';

jest.mock('../../api/api');

import HeroesList from './HeroesList';

afterEach(() => {
  apiHeroesList.mockClear();
  cleanup();
});

test('Component renders correctly', async () => {
  apiHeroesList.mockResolvedValue({ data: data });

  const { asFragment, getByText } = render(
    <HeroesList handleClick={() => {}} />
  );

  expect(apiHeroesList).toHaveBeenCalledTimes(1);

  const hero = await waitForElement(() => getByText('Hulk'));

  expect(hero).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('Component reorders', async () => {
  apiHeroesList.mockResolvedValue({ data: data });

  const { asFragment, getByText } = render(
    <HeroesList handleClick={() => {}} />
  );

  expect(apiHeroesList).toHaveBeenCalledTimes(1);
  expect(asFragment()).toMatchSnapshot();

  apiHeroesListOrderByName.mockResolvedValueOnce({ data: data });
  const orderButton = await waitForElement(() =>
    getByText('Ordenar por nome - A/Z')
  );
  fireEvent.click(orderButton);
  const hero = await waitForElement(() => getByText('Hulk'));

  expect(hero).toBeInTheDocument();
  expect(apiHeroesListOrderByName).toHaveBeenCalledTimes(1);
  expect(apiHeroesListOrderByName).toHaveBeenCalledWith(false);
  expect(asFragment()).toMatchSnapshot();

  apiHeroesListOrderByName.mockResolvedValueOnce({ data: dataOrder });
  const orderButtonReverse = await waitForElement(() =>
    getByText('Ordenar por nome - A/Z')
  );
  fireEvent.click(orderButtonReverse);
  const heroReverse = await waitForElement(() => getByText('Zzzax'));

  expect(heroReverse).toBeInTheDocument();
  expect(apiHeroesListOrderByName).toHaveBeenCalledTimes(2);
  expect(apiHeroesListOrderByName).toHaveBeenCalledWith(true);
  expect(asFragment()).toMatchSnapshot();
});
