import React from 'react';
import {
  cleanup,
  render,
  waitForElement,
  fireEvent,
} from '@testing-library/react';

import dataMinimal from './pages/Hero/data/minimal.json';
import data from './components/HeroesList/data/characters_limit20.json';
import { apiHeroesList, apiHeroByID } from './api/api';

jest.mock('./api/api');

afterEach(() => {
  apiHeroesList.mockClear();
  apiHeroByID.mockClear();
  cleanup();
});
import App from './App';

test('App renders Home', async () => {
  apiHeroesList.mockResolvedValue({ data: data });
  const { asFragment, container, getByText } = render(<App />);

  const subtitle = await waitForElement(() => getByText('EXPLORE O UNIVERSO'));
  const Header = container.querySelectorAll('.Header');
  const Search = container.querySelectorAll('.Search');
  const HeroesList = container.querySelectorAll('.HeroesList');

  expect(subtitle).toBeInTheDocument();
  expect(Header).toHaveLength(1);
  expect(Search).toHaveLength(1);
  expect(HeroesList).toHaveLength(1);

  expect(asFragment()).toMatchSnapshot();
});

test('App renders Hero', async () => {
  apiHeroesList.mockResolvedValue({ data: data });
  const { asFragment, container, getByText } = render(<App />);

  expect(apiHeroesList).toHaveBeenCalledTimes(1);

  const HeroCard = await waitForElement(() => getByText('Hulk'));

  apiHeroByID.mockResolvedValue({ data: dataMinimal });
  fireEvent.click(HeroCard);

  const hero = await waitForElement(() => getByText('Black Queen'));

  expect(hero).toBeInTheDocument();

  const Hero = container.querySelectorAll('.Hero');
  expect(Hero).toHaveLength(1);

  expect(asFragment()).toMatchSnapshot();
});
