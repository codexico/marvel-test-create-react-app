import React from 'react';
import { render } from '@testing-library/react';

import HeroesList from './HeroesList';

test('Component renders correctly', () => {
  const { asFragment } = render(<HeroesList handleClick={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});
