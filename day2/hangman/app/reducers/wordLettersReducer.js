/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from "../actions/types";

let word = [
  { letter: "H", guessed: true },
  { letter: "O", guessed: false },
  { letter: "R", guessed: false },
  { letter: "I", guessed: false },
  { letter: "Z", guessed: true },
  { letter: "O", guessed: false },
  { letter: "N", guessed: true },
  { letter: "S", guessed: false }
];

const wordLettersReducer = (state = word, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case "GOOD_GUESS":
      let tempState = [...state];
      for (let i = 0; i < tempState.length; i++) {
        if (tempState[i].letter === action.letter) {
          tempState[i].guessed = true;
        }
      }
      return tempState;
    default:
      return state;
  }
};

export default wordLettersReducer;
