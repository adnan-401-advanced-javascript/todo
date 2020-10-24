import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

test('render add item form', async () => {
  render(<App />);
  const form = screen.getByTestId("form");
  expect(form).toBeInTheDocument();
  await act(() => Promise.resolve());
});

test('render itemsHeader', async () => {
  render(<App />);
  const form = screen.getByTestId("itemsHeader");
  expect(form).toBeInTheDocument();
  await act(() => Promise.resolve());
});
