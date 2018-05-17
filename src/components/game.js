import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realNumber: Math.floor( Math.random() * 100) + 1,
      currentGuess: '',
      guessCounter: 0,
      userGuesses: [],
      headerMsg: 'Make your guess from 1-100!',
    }
  }  

  //capture input on submit
    // change placeholder text to 'Enter your Guess'
    // set currentGuess to captured input
    // run currentGuess against store realNumber
    // if currentGuess === realNum display headerMsgOptions[0]
        // else if, display ...
    // guess counter increments
    // add currentGuess to userGuesses  



  setCurrentGuess(currentGuess) {
    let newMessage;
    let realNumber = this.state.realNumber;
    let guess = parseInt(currentGuess, 10);
    let difference = Math.abs(realNumber - guess);

    if (guess === realNumber) {
      newMessage = 'You Win!';
    } else if (difference >= 0  && difference <= 5) {
      newMessage = 'Hot';
    } else if (difference <= 15) {
      newMessage = 'Warm';
    } else if (difference <= 25) {
      newMessage = 'A Little Warm'
    } else if (difference <= 40) {
      newMessage = 'Cold';
    } else if(difference <= 55) {
      newMessage = 'Colder';
    } else if (difference <= 70) {
      newMessage = 'Frozen';
    } else if (difference <= 100) {
      newMessage = 'Antarctica';
    } else {
      alert('Please enter a number between 0 and 100.');
    }

    this.setState({
      currentGuess: guess,
      headerMsg: newMessage
    })
  }

  setUserGuesses(currentGuess) {
    this.setState({userGuesses: [
      ...this.state.userGuesses, currentGuess
    ]})
  }

  setHeaderMsg(headerMsg) {
    this.setState({
      headerMsg
    })
  }
  
  render() {
    // this.setCurrentGuess(2);
    return (
      <div>
          <Header />
          <GuessSection headerMsg={this.state.headerMsg} />
          <GuessCount count={3} />
          <GuessList guesses={[10, 15, 25]} />
      </div>
    );
  }
}

//test purposes