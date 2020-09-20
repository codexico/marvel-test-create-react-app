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
