import React from 'react';
import { render } from '@testing-library/react';

import HeroCard from './HeroCard';

test('Component renders correctly', () => {
  const { asFragment } = render(
    <HeroCard
      key={1010354}
      heroID={1010354}
      handleClick={() => {}}
      name={'Adam Warlock'}
      thumbnail={{
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
        extension: 'jpg',
      }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
