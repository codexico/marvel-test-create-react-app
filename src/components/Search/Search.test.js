import React from 'react';
import { render } from '@testing-library/react';

import Search from './Search';

test('Component renders correctly', () => {
  const { asFragment } = render(<Search />);

  expect(asFragment()).toMatchSnapshot();
});
