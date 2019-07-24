import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import WordBox from "../components/WordBox";
import TextBox from "../components/TextBox";

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        console.log("PROPS", this.props);
        return (
            <div className="gameContainer">
                <WordBox wordList={this.props.wordList} />
                <TextBox
                    userInput={this.props.userInput}
                    onInput={e => {
                        this.onInput(e);
                    }}
                />
            </div>
        );
    }
}

let onInput = event => {
    let letter = String.fromCharCode(event.which);
    console.log(letter);
};

GameContainer.propTypes = {
    wordList: PropTypes.array
};

const mapStateToProps = state => {
    console.log("STATE", state);
    return {
        wordList: state.gameState.wordList,
        userInput: state.gameState.userInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
