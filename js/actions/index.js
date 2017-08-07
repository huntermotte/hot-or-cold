import 'isomorphic-fetch';

// generate number to start new game
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const generateNumber = () => ({
  type: GENERATE_NUMBER
});

//  guess a number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
  type: GUESS_NUMBER,
  guess
});

// determine how close the guessed number is to actual
export const DETERMINE_PROXIMITY = 'DETERMINE_PROXIMITY';
export const determineProximity = (guess, actual) => ({
  type: DETERMINE_PROXIMITY,
  guess,
  actual
});

// give feedback
export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = (guess, actual, feedback) => ({
  type: GIVE_FEEDBACK,
  guess,
  actual,
  feedback
});

// give message that number is correct
export const CORRECT_GUESS = 'CORRECT_GUESS';
export const correctGuess = message => ({
  type: CORRECT_GUESS,
  message
});

// start a new game/generate a new number
export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME
});

export const RECEIVE_FEWEST_GUESSES = 'RECEIVE_FEWEST_GUESSES';
export const receiveFewestGuesses = (fewestGuesses) => ({
  type: RECEIVE_FEWEST_GUESSES,
  fewestGuesses
});

// export const SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
// export const saveFewestGuesses = (score) => ({
//   type: SAVE_FEWEST_GUESSES,
//   score
// });

export const fetchData = () => {
  return (dispatch) => {

    fetch('http://localhost:8081/fewest-guesses')
    .then(response => console.log(response))
    .then(response => response.json())
    .then(json => dispatch(receiveFewestGuesses(json.fewestGuesses)))
    .catch(err => console.log('Error while parsing', err))
  }
}

export const saveData = (newFewestGuesses) => {
  return (dispatch) => {
    fetch('http://localhost:8081/fewest-guesses', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      data: JSON.stringify({newFewestGuesses})
    })
    .then(response => console.log(response))
    .then(response => response.json())
    .then(data => dispatch(receiveFewestGuesses(json.fewestGuesses)))
    .catch(err => console.log('Error while parsing', err))
  }
}

// generate number
// give feedback -update string
