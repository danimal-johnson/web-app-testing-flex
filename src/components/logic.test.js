import { newHit, newStrike, newBall, newFoul } from './logic';

// -------- Use cases ---------
//  (Basically a single pitch from any game state.)
//  * Hits, strikes, balls, and fouls increment.
//  * 3rd strike, 4th ball, or any hit cause strikes
//    and balls to rollover
//  * Fouls cause a strike iff strikes != 2
//

// New Game
const newGame = { hits: 0, strikes: 0, balls: 0, fouls: 0 };
// Ready to rollover
const rollover = { hits: 3, strikes: 2, balls: 3, fouls: 3 };
// One strike
const oneStrike = { hits: 0, strikes: 1, balls: 0, fouls: 0 };


// Values increment

test('hits increment', () => {
  expect(newHit(newGame)).toEqual({
    hits: 1, strikes: 0, balls: 0, fouls: 0
  })
})

test('strikes increment', () => {
  expect(newStrike(newGame)).toEqual({
    hits: 0, strikes: 1, balls: 0, fouls: 0
  })
});

test('balls increment', () => {
  expect(newBall(newGame)).toEqual({
    hits: 0, strikes: 0, balls: 1, fouls: 0
  })
});

test('fouls increment', () => {
  expect(newFoul(newGame)).toEqual({
    hits: 0, strikes: 1, balls: 0, fouls: 1
  })
});

// rollover

test('3rd strike causes rollover', () => {
  expect(newStrike(rollover)).toEqual({
    hits: 3, strikes: 0, balls: 0, fouls: 3
  })
});

test('4th ball causes rollover', () => {
  expect(newBall(rollover)).toEqual({
    hits: 3, strikes: 0, balls: 0, fouls: 3
  })
});

// Foul -> strike rules

test('fouls cause strikes 1 and 2 but not 3', () => {
  expect(newFoul(newGame)).toEqual({
    hits: 0, strikes: 1, balls: 0, fouls: 1
  });
  expect(newFoul(oneStrike)).toEqual({
    hits: 0, strikes: 2, balls: 0, fouls: 1
  });
  expect(newFoul(rollover)).toEqual({
    hits: 3, strikes: 2, balls: 3, fouls: 4
  });
});
