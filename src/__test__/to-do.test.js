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
  const header = screen.getByTestId("itemsHeader");
  expect(header).toBeInTheDocument();
  await act(() => Promise.resolve());
});


test('render elementsPerPage', async () => {
  render(<App />);
  const elementsPerPage = screen.getByTestId("elementsPerPage");
  expect(elementsPerPage).toBeInTheDocument();
  await act(() => Promise.resolve());
});


test('render sortBy', async () => {
  render(<App />);
  const sortBy = screen.getByTestId("sortBy");
  expect(sortBy).toBeInTheDocument();
  await act(() => Promise.resolve());
});

test('render hideCompleted', async () => {
  render(<App />);
  const hideCompleted = screen.getByTestId("hideCompleted");
  expect(hideCompleted).toBeInTheDocument();
  await act(() => Promise.resolve());
});
