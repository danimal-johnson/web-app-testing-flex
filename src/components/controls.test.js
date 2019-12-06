import React from 'react';
import { render } from '@testing-library/react';
import handleHit from './controls';

// test('renders the app', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/baseball game./i);
//   expect(linkElement).toBeInTheDocument();
// });

// New Game
const newGame = { hits: 0, strikes: 0, balls: 0, fouls: 0 };

test('hits the ball', () => {
  expect(handleHit(newGame)).toEqual({
    hits: 1, strikes: 0, balls: 0, fouls: 0
  })
})