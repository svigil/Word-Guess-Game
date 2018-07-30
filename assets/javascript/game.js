// Make variables and then make sure it all kicks off at the end when a key is hit

// Methods to accomplish goal
// Computer select a word to math random over array using the index for random
// Need to split up words, method called split to break up the string into separate letters
// Use underscores for word, then swap for letters
// make an array of underscores, broken into different letters - word comp chose store in var and move the 

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var word ;              // Selected word
var guess ;             // Geuss
var geusses = [ ];      // Stored geusses
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word '-'

var wins = 0;
var guessesRemaining = 5;
var wordList = ["Pumpkin", "Ghost", "Croatoan"];
var magicWord = "";
var showLives = document.getElementById("mylives");

var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < letters.length; i++) {
      letters.id = 'letters';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = letters[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


// Create geusses ul
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }


// OnClick Function
check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

// Play
play = function () {
    categories = [
        ["Pumpkin", "Ghost", "Croatoan"],
        
    ];

    
    
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }




  // document.getElementById('reset').onclick = function() {
  //   correct.parentNode.removeChild(correct);
  //   letters.parentNode.removeChild(letters);
  //   showClue.innerHTML = "";
  //   context.clearRect(0, 0, 400, 400);
  //   play();
  // }






var stageEl = document.getElementById("stage");

var computerWordChoice = wordList[Math.floor(Math.random()*wordList.length)];

var displayDash = ["_","_","_","_","_","_","_","_","_","_","_","_"]

console.log(computerWordChoice)

var game = {
    progress: "",

// Look at 2:50 on RPS

// Determine if letter chosen matches the word that the computer chose @8:50RPS

    evaluateGuess: function(guess) {
        if (guess) {

        }
    },
    render: function(str) {

    }
}

var html = "<p>Wins:" + wins + "</p>" + 
"<p> Wins:" + computerWordChoice + "</p>" +
// Dashes
"<p>Number of guesses remaining: </p>" + 
"<p>" + guessesRemaining + "</p>" +
"<p>Letters already guessed: </p>"; //+
// letters guessed


    

// look at RPS
// passing into the function is event inside the function to store the users key press
// create an array with the letters like the fridge
// if not in array ignore the key
// to 

// for loops to use an array

document.onkeyup = function(event) {
    if (guessesRemaining > 0 && game.progress !== magicWord) {
         

    }



// Make an empty array to store wrong guesses

};