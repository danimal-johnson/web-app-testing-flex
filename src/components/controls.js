import React, { useState } from 'react';
import Display from './display';

// ================ Logic Functions ===================

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

// ============== Controls Component ================

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

    // ------- Event Handlers -----------

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

    // ------------- Return ---------------

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