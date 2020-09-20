import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import HeroCard from './HeroCard';

test('Component renders correctly', async () => {
  const handleClick = jest.fn();

  const { asFragment, getByText } = render(
    <HeroCard
      key={1010354}
      heroID={1010354}
      handleClick={handleClick}
      handleFavourite={() => {}}
      favourite={false}
      name={'Adam Warlock'}
      thumbnail={{
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
        extension: 'jpg',
      }}
    />
  );

  const hero = await waitForElement(() => getByText('Adam Warlock'));
  fireEvent.click(hero);

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith(1010354);
  expect(asFragment()).toMatchSnapshot();
});

test('Component renders favourite', async () => {
  const handleClick = jest.fn();

  const { asFragment, getByText } = render(
    <HeroCard
      key={1010354}
      heroID={1010354}
      handleClick={handleClick}
      handleFavourite={() => {}}
      favourite={true}
      name={'Adam Warlock'}
      thumbnail={{
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
        extension: 'jpg',
      }}
    />
  );

  const hero = await waitForElement(() => getByText('Adam Warlock'));
  fireEvent.click(hero);

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith(1010354);
  expect(asFragment()).toMatchSnapshot();
});

test('Component handles favourite', async () => {
  const handleFavourite = jest.fn();

  const { asFragment, getByLabelText } = render(
    <HeroCard
      key={1010354}
      heroID={1010354}
      handleClick={() => {}}
      handleFavourite={handleFavourite}
      favourite={false}
      name={'Adam Warlock'}
      thumbnail={{
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
        extension: 'jpg',
      }}
    />
  );

  const button = await waitForElement(() =>
    getByLabelText('Clique para favoritar')
  );
  fireEvent.click(button);

  expect(handleFavourite).toHaveBeenCalledTimes(1);

  expect(asFragment()).toMatchSnapshot();
});
