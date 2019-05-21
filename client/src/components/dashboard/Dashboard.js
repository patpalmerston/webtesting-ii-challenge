import React from 'react';

function Dashboard(props) {
  
  return(
    <>
    <button data-testid="ballsButton" onClick={() => props.ballsHandler()}>Balls</button>
    <button data-testid="strikesButton" onClick={() => props.strikesHandler()}>Strikes</button>
    <button data-testid="foulButton" onClick={() => props.foulHandler()}>Foul</button>
    <button data-testid="hitButton" onClick={() => props.hitHandler()}>Hit</button>
    </>
  )
}

export default Dashboard;