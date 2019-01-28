var wrongGuessesReamianing = 5;
var TestLetter = function () {
    this.incorrect = function (letter, word, incorrectGuesses) {
        if (incorrectGuesses.includes(letter)) {
            console.log(letter + " has already been guessed, please enter another guess")
        } else {
            if (word.includes(letter) === false) {
                incorrectGuesses.push(letter)
            }
            return incorrectGuesses
        }

    }
    this.test = function (word, letter, display) {
        if (word.includes(letter)) {
            for (i = 0; i < word.length; i++) {
                if (word.charAt(i) == letter) {
                    display[i] = letter
                }
            }
            console.log("Guesses Remaining: " + wrongGuessesReamianing)
        } else {
            wrongGuessesReamianing--;
            if (wrongGuessesReamianing <= 0) {
                console.log("Oh No! You've ran out of guesses :( Correct Answer: " + word)
                process.exit(0)
            }
            console.log("Guesses Remaining: " + wrongGuessesReamianing)
        }

        return display
    }

}
module.exports = TestLetter;