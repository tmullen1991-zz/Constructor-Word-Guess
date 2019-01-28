// intialize NPM pacakge manager variables and module for word.js
var inquirer = require("inquirer");
var Word = require("./Word")
var word = new Word()
var randomWords = require('random-words');

// Pull a random word from random-words
var currentWord = randomWords()
// Create a "fill-in-the-balnks" display variable representing the word. This will be slowly filled if guesses are correct
var displayWord = []
for (i = 0; i < currentWord.length; i++) {
    displayWord.push("_")
}

// create a function to be called recursively which: 
// 1. Will prompt a new letter and user will hit enter
// 2. if only one letter is passed through, the word, letter guessed and blank display word are passed into word.js
var guess = function () {

    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "guess"
        }
    ]).then(function (inquirerResponse) {

        // make guess lower case
        var currentGuess = inquirerResponse.guess.toLowerCase()
        // pass input and variables into word.js
        if (currentGuess.length > 1) {
            console.log("please enter only one letter per guess")
        } else {
            word.display(currentWord, currentGuess, displayWord)
        }
        // display separator for each guess
        console.log("_____________________________________________________")
        // recursive function call
        guess()
    })
}
// inital function call
guess()