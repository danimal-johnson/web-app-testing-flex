export const newHit = startStats => {
  let stats = {...startStats};
  stats.hits++;
  stats.strikes = 0;
  stats.balls = 0;
  return stats;
}

export const newStrike = startStats => {
  let stats = {...startStats};
  stats.strikes++;
  if (stats.strikes === 3) {
    stats.strikes = 0;
    stats.balls = 0;
  }
  return stats;
}

export const newBall = startStats => {
  let stats = {...startStats};
  stats.balls++;
  if (stats.balls === 4) {
    stats.strikes = 0;
    stats.balls = 0;
  }
  return stats;
}

export const newFoul = startStats => {
  let stats = {...startStats};
  stats.fouls++; // Do fouls ever need to reset?
  if (stats.strikes < 2) {
    stats.strikes++;
  }
  return stats;
}
