import * as actions from '../actions/index';

const initialGameState = {
  feedback: '',
  guesses: [],
  fewestGuesses: 10
};

const gameReducer = (state=initialGameState, action) => {
  if (action.type === actions.GENERATE_NUMBER) {
    return {
      ...state,
      number: Math.floor((Math.random() * 100) + 1)
    };
  }
  else if (action.type === actions.GUESS_NUMBER) {
    return {
      ...state,
        guesses: [...state.guesses, action.guess]
    };
  }
  else if (action.type === actions.DETERMINE_PROXIMITY) {
    const guess = action.guess;
    const actual = action.actual;
    const difference = Math.abs(guess - actual);
    return {
      ...state,
        difference: difference
      };
  }
  else if (action.type === actions.GIVE_FEEDBACK) {
    const guess = action.guess;
    const actual = action.actual;
    const difference = Math.abs(state.guesses[state.guesses.length-1] - state.number);
    if (difference <= 5 && difference > 0) {
      return {
        ...state,
        feedback: 'HOT'
      }
    }
    else if (difference > 5 && difference < 10) {
      return {
        ...state,
        feedback: 'WARM'
      }
  }
    else if (difference >= 10) {
    return {
      ...state,
      feedback: 'COOL'
    }
  }
  else if (difference === 0) {
    return {
      ...state,
      feedback: 'YOU WON!'
    }
  }
  else {}
}
  else if (action.type === actions.CORRECT_GUESS) {
    return {
      ...state,
        feedback: 'CORRECT!'
      };
  }
  else if (action.type === actions.START_NEW_GAME) {
    return {
      ...state,
        number: Math.floor((Math.random() * 100) + 1),
        guesses: []
      };
  }
  else if (action.type === actions.RECEIVE_FEWEST_GUESSES) {
    return {
      ...state,
      fewestGuesses: action.fewestGuesses
    };
  }
  else if (action.type === actions.SAVE_FEWEST_GUESSES) {
    if (state.feedback === 'YOU WON!' && state.guesses.length < state.fewestGuesses) {
      const fewestGuesses = guesses.length
    }
    return {
      ...state,
      fewestGuesses: ''
    };
  }
  else {
    return state
  }
}



export default gameReducer;
