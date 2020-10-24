import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTJjN2ZlNjE0MmVjMDAxNzlkMWNhNiIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjAzNTQ5Nzg2LCJleHAiOjE2MDM1NTMzODZ9.4lsKrYl61hwVTjUimVyjZ3rDtFU-6drPWwdg6GFCNMc";


test('render add item form', (done) => {
  render(<App token={token} />);
  setTimeout(() => {
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
    done();
  }, 0);
});

test('render itemsHeader', (done) => {
  render(<App token={token} />);
  setTimeout(() => {
  const header = screen.getByTestId("itemsHeader");
  expect(header).toBeInTheDocument();
  done();
}, 0);
});


test('render elementsPerPage', (done) => {
  render(<App token={token} />);
  setTimeout(() => {
  const elementsPerPage = screen.getByTestId("elementsPerPage");
  expect(elementsPerPage).toBeInTheDocument();
  done();
}, 0);
});


test('render sortBy', (done) => {
  render(<App token={token} />);
  setTimeout(() => {
  const sortBy = screen.getByTestId("sortBy");
  expect(sortBy).toBeInTheDocument();
  done();
}, 0);
});

test('render hideCompleted', (done) => {
  render(<App token={token} />);
  setTimeout(() => {
  const hideCompleted = screen.getByTestId("hideCompleted");
  expect(hideCompleted).toBeInTheDocument();
  done();
}, 0);
});
