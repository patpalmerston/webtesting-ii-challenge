import React from 'react';
import Display from './components/Display';

import './App.css';

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  ballsHandler = () => {

  };

  strikesHandler = () => {

  }

  foulHandler = () => {

  }

  hitHandler = () => {

  }

  render(){
    return (
      <div className="App">
        
        <h1>Hello World</h1>

        <Display
          ballsHandler={this.ballsHandler}
          strikesHandler={this.strikesHandler}
          foulHandler={this.foulHandler}
          hitHandler={this.hitHandler}
          balls={this.state.balls}
          strikes={this.state.strikes}
        /> 
      </div>
    );
  }
}

export default App;
