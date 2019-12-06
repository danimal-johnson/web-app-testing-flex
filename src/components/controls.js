import React, { useState } from 'react';
import Display from './display';
import { newHit, newStrike, newBall, newFoul } from './logic'

// ================ Logic Functions =====================

// ** Moved to external file (logic.js) to enable testing

// ============== Controls Component ====================

const Controls = () => {
    const [stats, setStats] = useState(
      {
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0,
      }
    );
    
    // console.log("Current stats:", stats);

    // ------- Event Handlers -----------
    // TODO: Use a callback fn() so we don't need 4 copies of this.
    const handleHit = e => {
      e.preventDefault();
      // Make a copy to prevent state values being passed
      // by reference outside this file.
      let statsCopy = {...stats}; 
      let tempStats = newHit(statsCopy);
      setStats({...stats, ...tempStats});
    }
    const handleStrike = e => {
      e.preventDefault();
      let statsCopy = {...stats};
      let tempStats = newStrike(statsCopy);
      setStats({...stats, ...tempStats});
    }
    const handleBall = e => {
      e.preventDefault();
      let statsCopy = {...stats};
      let tempStats = newBall(statsCopy);
      setStats({...stats, ...tempStats});
    }
    const handleFoul = e => {
      e.preventDefault();
      let statsCopy = {...stats};
      let tempStats = newFoul(statsCopy);
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
    </div>
  );

}

export default Controls;