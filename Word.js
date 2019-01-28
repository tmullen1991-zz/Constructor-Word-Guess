// intialize module for letter.js
var Letter = require("./Letter.js")
var letter = new Letter()
// Array to keep track of incorrect guesses so same letter cannot be entered twice
var incorrectGuesses = []

// constructor object for index.js
var Word = function () {

    // function for displaying and passing variables into letter.js
    this.display = function (word, guess, displayWord) {
        var incorrectArr = letter.incorrect(guess, word, incorrectGuesses)
        if (incorrectArr !== undefined) {
            console.log("Letters Incorrect: " + incorrectArr.join(", "))
            var show = letter.test(word, guess, displayWord)
            if (show.includes("_") === false) {
                console.log("Nice Going! You got it! Correct Answer: " + show.join(" "))
                process.exit(0)
            }
            console.log(show.join(" "))
        }
    }
}
// export module for index.js
module.exports = Word;