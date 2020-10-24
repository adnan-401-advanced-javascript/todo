import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

test('renders learn react link', async () => {
  render(<App />);
  const app = screen.getByTestId("app");
//  const linkElement = getByText(/learn react/i);
  expect(app).toBeInTheDocument();
  await act(() => Promise.resolve());
});
