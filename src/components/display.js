import React from 'react';

const Display = (props) => {

  return (
    <>
      <h2>Hits: {props.stats.hits}</h2>
      <h2>Strikes: {props.stats.strikes}</h2>
      <h2>Balls: {props.stats.balls}</h2>
      <h2>Fouls: {props.stats.fouls}</h2>
    </>
  )

}

export default Display;