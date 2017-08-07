import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {saveData} from '../reducers';

export function UserInputs(props) {
  // constructor(props) {
  //       super(props);
  //       this.guessNumber = this.guessNumber.bind(this);
  //       this.startNewGame = this.startNewGame.bind(this);
  //   }

// guessNumber(guess) {
//   this.props.dispatch(actions.guessNumber)
// }

// startNewGame() {
//   this.props.dispatch(actions.startNewGame)
// }

  return (
    <div className="userInputs">
      <button type="button" onClick={props.startNewGame}>Start a New Game</button>
      <form onSubmit={(event) => {
        event.preventDefault();
        let userGuess = event.target.userGuess.value;
        props.guessNumber(userGuess);
        const correctAnswer = props.correctAnswer;
        console.log(userGuess)
        console.log(correctAnswer)
        let winningScore;
        if (userGuess == correctAnswer) {
          winningScore = props.guesses.length;
          console.log(winningScore);
        }
        let newFewestGuesses;
        console.log(winningScore)
        console.log(props.fewestGuesses)
          if (winningScore < props.fewestGuesses) {
            newFewestGuesses = props.guesses.length
            console.log(newFewestGuesses)
            props.saveData(newFewestGuesses)
          }
        // if user gets answer correct , they've won
        // check if number of guesses is less than the one in database
        // if so, insert that number into the database as fewestGuesses, which will update the number on the screen
        props.giveFeedback();
        // props.saveData();
        event.target.userGuess.value = '';
          }}>
        <input type="number" name="userGuess" placeholder="Enter your guess here" />
        <input type="submit" />
    </form>
  </div>
)
}

const mapDispatchToProps = (dispatch) => ({
  guessNumber: (userGuess) => dispatch(actions.guessNumber(userGuess)),
  startNewGame: () => dispatch(actions.startNewGame()),
  giveFeedback: () => dispatch(actions.giveFeedback()),
  saveData: (newFewestGuesses) => dispatch(actions.saveData(newFewestGuesses))
})

const mapStateToProps = (state, props) => ({
  guesses: state.guesses,
  feedback: state.feedback,
  correctAnswer: state.number,
  fewestGuesses: state.fewestGuesses
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInputs);
