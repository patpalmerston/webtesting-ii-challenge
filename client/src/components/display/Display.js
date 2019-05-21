import React from 'react';



function Display(props) {
  const { balls, strikes } = props
  return(
    <div>
      <h4>Lets Play</h4>
      
      <div data-testid='balls-count'>{`Balls: ${balls}`}</div>
      <div data-testid='strikes-count'>{`Strikes: ${strikes}`}</div>


    </div>
  )
}

export default Display;