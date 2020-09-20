import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';

import data from './data/characters_limit20.json';

import { apiHeroesList } from '../../api/api';

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
