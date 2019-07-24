import dictionary from "../../app/dictionary";

let words = _.shuffle(dictionary).slice(0, 100);

let wordsObj = words.map(word => {
    console.log(word, "WORD");
    let tempWordArr = [];
    for (let i = 0; i < word.length; i++) {
        console.log(word);
        let letterObj = {
            letter: word.charAt(i),
            status: "pending"
        };
        tempWordArr.push(letterObj);
    }
    return tempWordArr;
});

let initialState = {
    wordList: wordsObj,
    //wordindex, char index
    currentIndex: [0, 0],
    userInput: ""
};

const gameReducer = (state = initialState, action) => {
    console.log(wordsObj);
    switch (action.type) {
        default:
            return state;
    }
};
export default gameReducer;
