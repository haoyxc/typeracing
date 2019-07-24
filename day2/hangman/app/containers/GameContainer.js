import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Man from "../components/Man";
import Board from "../components/Board";

const GameContainer = ({
  badGuesses,
  wordLetters,
  onBadGuess,
  onGoodGuess,
  guessedLetters
}) => {
  let input;
  const letterInAnswer = letter =>
    wordLetters.some(letterObj => letterObj.letter === letter);

  /* the ref node thing in the code below is another way
    to handle input in React Forms */
  return (
    <div>
      <Man badGuesses={badGuesses} />
      <Board wordLetters={wordLetters} guessedLetters={guessedLetters} />
      <input
        type="text"
        value={""}
        ref={node => {
          input = node;
        }}
        onChange={() =>
          letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)
        }
      />
    </div>
  );
};

GameContainer.propTypes = {
  badGuesses: PropTypes.number,
  wordLetters: PropTypes.array,
  onInput: PropTypes.func,
  guessedLetters: PropTypes.array
};

const mapStateToProps = state => {
  return {
    badGuesses: state.badGuesses,
    guessedLetters: state.guessedLetters,
    wordLetters: state.wordLetters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBadGuess: inputLetter => {
      dispatch({ type: "BAD_GUESS", letter: inputLetter });
    },
    onGoodGuess: inputLetter => {
      dispatch({ type: "GOOD_GUESS", letter: inputLetter });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
