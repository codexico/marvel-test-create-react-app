import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

test('Component renders correctly', () => {
  const { asFragment } = render(
    <Home
      handleClick={() => {}}
      setCharacters={() => {}}
      handleFavourite={() => {}}
      favourites={[]}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
