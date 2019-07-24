import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import guessedLettersReducer from "../reducers/guessedLettersReducer";

const Board = ({ wordLetters, guessedLetters }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* PSA: Box in this map should normally be given a key */}
      {wordLetters.map(letter => (
        <Box letter={letter} />
      ))}
      <div>
        {guessedLetters.map(letter => (
          <p>{letter}</p>
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  wordLetters: PropTypes.array
};

export default Board;
