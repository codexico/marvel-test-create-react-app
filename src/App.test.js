import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders components', () => {
  const { container } = render(<App />);

  const Header = container.querySelectorAll('.Header');

  expect(Header).toHaveLength(1);
});

test('Link renders correctly', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
