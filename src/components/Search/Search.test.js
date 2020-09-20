import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Search from './Search';

test('Component renders correctly', () => {
  const { asFragment } = render(<Search handleSearch={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});

test('Component handles search', () => {
  const handleSearch = jest.fn();

  const { getByPlaceholderText } = render(
    <Search handleSearch={handleSearch} />
  );

  const input = getByPlaceholderText('Procure por heróis');

  fireEvent.change(input, { target: { value: '  Hulk  ' } });

  fireEvent.submit(input);

  expect(handleSearch).toHaveBeenCalledTimes(1);
  expect(handleSearch).toHaveBeenCalledWith('Hulk');

  fireEvent.change(input, { target: { value: '   ' } });
  fireEvent.submit(input);
  expect(handleSearch).toHaveBeenCalledTimes(1);
});
