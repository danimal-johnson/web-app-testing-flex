// import React from 'react';
// import { render } from '@testing-library/react';
// import newHit from './controls';

// New Game
const newGame = { hits: 0, strikes: 0, balls: 0, fouls: 0 };
// Ready to rollover
const rollover = { hits: 3, strikes: 2, balls: 3, fouls: 3 };
// One strike
const oneStrike = { hits: 0, strikes: 1, balls: 0, fouls: 0 };


// ------ Dumb math problem -------

const add = (a,b) => (a + b);

test("does simple math", () => {
  expect(add(2,4)).toBe(6);
})

// ------- An actual use case test --------
// This fails when run here. Probably because
// the testing suite knows its test target is
// using hooks (even if the function isn't).

// test('hits the ball', () => {
//   expect(newHit(newGame)).toEqual({
//     hits: 1, strikes: 0, balls: 0, fouls: 0
//   })
// })


// ------ A completely local, disconnected fn() copy ------
const newStrike = startStats => {
  let stats = {...startStats};
  stats.strikes++;
  if (stats.strikes === 3) {
    stats.strikes = 0;
    stats.balls = 0;
  }
  return stats;
}

test('has a first strike', () => {
  expect(newStrike(newGame)).toEqual({
    hits: 0, strikes: 1, balls: 0, fouls: 0
  })
});