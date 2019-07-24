import * as types from "../actions/types";

const guessedLettersReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case "BAD_GUESS":
      let stateCopy = [...state];
      return [...stateCopy, action.letter];
    case "GOOD_GUESS":
    default:
      return state;
  }
};

export default guessedLettersReducer;
