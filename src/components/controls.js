import React, { useState } from 'react';
import Display from './display';

export const newHit = stats => {
  stats.hits++;
  stats.strikes = 0;
  stats.balls = 0;
  // Are stats being passed by reference here?
  // (It works without returning anything.)
}

export const newStrike = stats => {
  stats.strikes++;
  if (stats.strikes === 3) {
    stats.strikes = 0;
    stats.balls = 0;
  }
}

export const newBall = stats => {
  stats.balls++;
  if (stats.balls === 4) {
    stats.strikes = 0;
    stats.balls = 0;
  }
}

export const newFoul = stats => {
  stats.fouls++;
  if (stats.strikes < 2) {
    stats.strikes++;
  }
}

const Controls = () => {
    const [stats, setStats] = useState(
      {
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0,
      }
    );
    
    console.log("Current stats:", stats);

    const handleHit = e => {
      e.preventDefault();
      let tempStats = newHit(stats);
      setStats({...stats, ...tempStats});
    }
    const handleStrike = e => {
      e.preventDefault();
      let tempStats = newStrike(stats);
      setStats({...stats, ...tempStats});
    }
    const handleBall = e => {
      e.preventDefault();
      let tempStats = newBall(stats);
      setStats({...stats, ...tempStats});
    }
    const handleFoul = e => {
      e.preventDefault();
      let tempStats = newFoul(stats);
      setStats({...stats, ...tempStats});
    }

  return (
    <div className="container">
      <button onClick={handleHit}>Hit</button>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>      
      <Display stats={stats} />
      <h3>Strikes are really {stats.strikes}</h3>
    </div>
  );

}

export default Controls;