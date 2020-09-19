import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

test('Component renders correctly', () => {
  const { asFragment } = render(<Hero heroID={123} />);

  expect(asFragment()).toMatchSnapshot();
});
