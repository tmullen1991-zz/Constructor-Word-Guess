# Constructor-Word-Guess

## What is the App?

Constructor-Word-Guess is a simple hangman like CLI game that uses multpile contructor functions over multpile js files to handle functions. The purpose of the app is to show the usefulness of splitting up functions between files to make for much cleaner and esier to understand code. Creating more complex js applications can be made much easier to manage using the methods from this app.

## How it Works

Thes app is meant to be used with node from command line. The CLI utilizes inquirer.js (https://www.npmjs.com/package/inquirer) and random-words (https://www.npmjs.com/package/random-words) package managers. After initally exicuting index.js a random word will be selected using random-words and the user will be prompt to enter random letters using an inquirer function that is called recursively until the word is guessed or a certain incorrect guess limit is reached. (See gif examples of winning and losing below).

### Gif Examples

![Alt Text](images/word-guess-CLI-correct.gif)

![Alt Text](images/word-guess-CLI-wrong.gif)

### How the Code Works

NPM packages and user input is managed in index.js with the actual JS functions being called in index.js from word.js and letter.js as modules using the require function. 

#### 1. Index.js

Index.js handles user input, inquirer, and radom-words packe managers. It first takes a single random word from random-words and creates a fill-in-the-blanks array used to represent blank letter for the user to guess. It then calls an inquirer function called guess() that takes user input and tests if it's a single character to be taken as a guess and if so passes it, the word, and blank word array into word.js. guess() is then called recursively to run again after input is tested and displayed in the other JS files. Process.exit(0) is used to exit node once the game is won or lost in letter.js or word.js.

#### 2. Word.js

