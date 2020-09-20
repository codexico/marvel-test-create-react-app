import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';

import dataMinimal from './data/minimal.json';
import dataFull from './data/full.json';

import { apiHeroByID } from '../../api/api';

jest.mock('../../api/api');

afterEach(() => {
  apiHeroByID.mockClear();
  cleanup();
});

import Hero from './Hero';

describe('Hero Page', () => {
  test('Component renders correctly when hero has minimal data', async () => {
    apiHeroByID.mockResolvedValue({ data: dataMinimal });

    const { asFragment, getByText } = render(<Hero heroID={123} />);

    expect(apiHeroByID).toHaveBeenCalledTimes(1);

    const hero = await waitForElement(() => getByText('Black Queen'));
    expect(hero).toBeInTheDocument();

    const comics = await waitForElement(() => getByText('Quadrinhos 2'));
    expect(comics).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  test('Component renders correctly when hero has all data', async () => {
    apiHeroByID.mockResolvedValue({ data: dataFull });

    const { asFragment, getByText } = render(<Hero heroID={123} />);

    expect(apiHeroByID).toHaveBeenCalledTimes(1);

    const hero = await waitForElement(() => getByText('Hulk'));
    expect(hero).toBeInTheDocument();

    const comics = await waitForElement(() => getByText('Quadrinhos 1666'));
    expect(comics).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
