import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

test('Component renders correctly', () => {
  const { asFragment } = render(<Header setPage={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});

test('Component navigate', () => {
  const setPage = jest.fn();
  const { getByTitle } = render(<Header setPage={setPage} />);

  const logo = getByTitle('Marvel - Search heroes');
  fireEvent.click(logo);

  expect(setPage).toHaveBeenCalledTimes(1);
});
