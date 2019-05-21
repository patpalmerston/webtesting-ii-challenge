import React from 'react';



function Display(props) {
  const { balls, strikes } = props
  return(
    <div>
      <h1>I am the Display component</h1>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <div data-testid='balls-count'>{`Balls: ${balls}`}</div>
      <div data-testid='strikes-count'>{`Strikes: ${strikes}`}</div>


    </div>
  )
}

export default Display;