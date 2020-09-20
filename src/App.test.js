import React from 'react';
import {
  cleanup,
  render,
  waitForElement,
  fireEvent,
} from '@testing-library/react';

import dataMinimal from './pages/Hero/data/minimal.json';
import data from './components/HeroesList/data/characters_limit20.json';
import dataSearch from './components/Search/data/search.json';

import { apiHeroesList, apiHeroByID, apiHeroSearch } from './api/api';

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

test('App handles search', async () => {
  apiHeroesList.mockResolvedValue({ data: data });
  const { asFragment, container, getByPlaceholderText, getByText } = render(
    <App />
  );

  const input = getByPlaceholderText('Procure por heróis');

  fireEvent.change(input, { target: { value: 'Hulk' } });

  apiHeroSearch.mockResolvedValue({ data: dataSearch });
  fireEvent.submit(input);

  const hero = await waitForElement(() => getByText('Hulk'));
  expect(hero).toBeInTheDocument();

  const HeroCard = container.querySelectorAll('.HeroCard');
  expect(HeroCard).toHaveLength(1);

  expect(apiHeroSearch).toHaveBeenCalledTimes(1);
  expect(apiHeroSearch).toHaveBeenCalledWith('Hulk');
  expect(asFragment()).toMatchSnapshot();
});

test('App handles favourites', async () => {
  apiHeroesList.mockResolvedValue({ data: data });
  const { asFragment, getByLabelText, getAllByLabelText } = render(<App />);

  const buttons = await waitForElement(() =>
    getAllByLabelText('Clique para favoritar')
  );

  expect(buttons[0]).toBeInTheDocument();

  fireEvent.click(buttons[0]);

  const favouriteSelected = await waitForElement(() =>
    getByLabelText('Herói favorito')
  );
  expect(favouriteSelected).toBeInTheDocument();

  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[2]);
  fireEvent.click(buttons[3]);
  fireEvent.click(buttons[4]);
  window.alert = jest.fn();
  fireEvent.click(buttons[5]);

  expect(window.alert).toHaveBeenCalledTimes(1);

  const favouriteSelectedAll = await waitForElement(() =>
    getAllByLabelText('Herói favorito')
  );
  expect(favouriteSelectedAll.length).toBe(5);

  fireEvent.click(favouriteSelectedAll[0]);

  const favouriteRemoved = await waitForElement(() =>
    getAllByLabelText('Herói favorito')
  );
  expect(favouriteRemoved.length).toBe(4);

  expect(asFragment()).toMatchSnapshot();
});
