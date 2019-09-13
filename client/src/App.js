import React from 'react';
import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  ballsHandler = () => {
    // const { balls } = this.state; -this is another way to access state
    const balls = this.state.balls;
    if (balls < 3) {
    this.setState({ balls: this.state.balls + 1})
    } else {
      this.setState({ balls: 0 })
    }
  };

  strikesHandler = () => {
    const strikes = this.state.strikes;
    if (strikes < 2) {
      this.setState({ strikes: this.state.strikes +1 });
    } else {
      this.setState({ strikes: 0 })
    }
  };

  foulHandler = () => {
    const strikes = this.state.strikes;
    if(strikes < 2){
      this.setState({ strikes: this.state.strikes + 1 })
    }
  }

  hitHandler = () => {
    this.setState({balls: 0, strikes: 0 })
  }

  render(){
    return (
      <div className="App">
        <h1>Scoreboard</h1>
        <h2>Game Time!</h2>

        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
        /> 
        <Dashboard 
        ballsHandler={this.ballsHandler}
        strikesHandler={this.strikesHandler}
        foulHandler={this.foulHandler}
        hitHandler={this.hitHandler}
        />
        
      </div>
    );
  }
}

export default App;
