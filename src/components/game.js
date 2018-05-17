import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // The current number which the user is trying to guess.
      realNumber: '',
      // The user's most recent guess.
      currentGuess: '',
      // A history of the user's guesses.
      userGuesses: [],
      // The feedback currently being displayed to the user.
      headerMsg: '',
      // The different options for feedback that the user can be given.
    }
  }  

  // realNumber math function
  setRealNum(realNumber) {
    this.setState({
      realNumber
    })
  }

  setCurrentGuess(currentGuess) {
    this.setState({
      currentGuess
    })
  }

  // setUserGuesses()

  setHeaderMsg(headerMsg) {
    this.setState({
      headerMsg
    })
  }
  
  render() {
    return (
      <div>
          <Header />
          <GuessSection feedback="Make your guess!" />
          <GuessCount count={3} />
          <GuessList guesses={[10, 15, 25]} />
      </div>
    );
  }
}

//test purposes