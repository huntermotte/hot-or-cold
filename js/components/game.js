import React from 'react';
import UserInputs from './user-inputs';
import Feedback from './feedback';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {fetchData} from '../reducers';

export class Game extends React.Component {
  constructor(props) {
        super(props);
        // this.generateNumber = this.generateNumber.bind(this);
        // this.guessNumber = this.guessNumber.bind(this);
        // this.determineProximity = this.determineProximity.bind(this);
        // this.giveFeedback = this.giveFeedback.bind(this);
        // this.correctGuess = this.correctGuess.bind(this);
        // this.startNewGame = this.startNewGame.bind(this);
    }

    componentDidMount() {
      this.props.fetchData()
      // call fetchBestScore
    }

  render() {
    return(
      <div className="game">
        <h1>Hot or Cold Game</h1>
        <h2>Fewest number of guesses to win is {this.props.fewestGuesses} so far!</h2>
        <Feedback />
        <UserInputs />
        <h3>{this.props.guesses.map((guess, index) => <li key={index}> {guess}</li> )}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  feedback: state.feedback,
  guesses: state.guesses,
  fewestGuesses: state.fewestGuesses
});

const mapDispatchToProps = (dispatch) => ({
  generateNumber: () => dispatch(actions.generateNumber()),
  fetchData: () => dispatch(actions.fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
