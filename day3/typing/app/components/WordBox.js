import React, { Component } from "react";

export default class WordBox extends Component {
    // constructor(props)
    render() {
        let elements = [];
        console.log(this.props.wordList);
        for (let i = 0; i < this.props.wordList.length; i++) {
            let word = this.props.wordList[i];
            for (let j = 0; j < word.length; j++) {
                elements.push({ letter: word[j].letter, status: word[j].status });
            }
            elements.push({ letter: " ", status: "space" });
        }
        console.log(elements);
        return (
            <div className="wordbox">
                {elements.map(character => (
                    <span className={character.status}>{character.letter}</span>
                ))}
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         words: state.words
//     };
// };
