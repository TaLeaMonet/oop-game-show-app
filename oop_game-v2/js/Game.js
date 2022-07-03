/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor(){
            this.missed = 0; 
            this.phrases = [
            new Phrase("Ignorance Is Bliss"),
            new Phrase("Wild Wild West"), 
            new Phrase("Three Blind Mice"), 
            new Phrase("God Bless You"), 
            new Phrase("Of Mice And Men")
            ];
            this.activePhrase = null; 
        } 
   /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */ 
        getRandomPhrase() {
            const randomPhrase = Math.floor(Math.random() * this.phrases.length);
            return this.phrases[randomPhrase]; 
        }
     /**
     * Begins game by selecting a random phrase and displaying it to user
     */    
        startGame(phrase) {
            let startScreenOverlay = document.getElementById("overlay");
            startScreenOverlay.style.display = "none";
            //Set the active phares equal to the randomPhrase method
            this.activePhrase = this.getRandomPhrase();
            return this.activePhrase.addPhraseToDisplay();
            
        }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won */    
        checkForWin(letter) {
            let phraseLetters = document.getElementsByClassName("letter");
            let shownLetters = document.getElementsByClassName("show");
            //Check length of the letters that have been shown against length of the phrase letters
            if(shownLetters.length === phraseLetters.length) {
                return true; 
            } else {
                return false; 
            }
        }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
        removeLife() {
            const heartsLeft = document.querySelectorAll('img');
            //Check missed property for how many hearts left in game
            if(this.missed < 4) {
                heartsLeft[this.missed].src = 'images/lostHeart.png';
                this.missed += 1
            } else {
                this.gameOver();
            }

        }
        /**
         * Handles main functionality of game making use of helper methods
         * Disables buttons already selected
         * Adds respective className to each button
         * Checks if game is over
         * If game has been one, resets the game
          */
        handleInteraction(button) {
            button.disabled = true;
            //Check if the active phrase does NOT include the text content of button
            if(!this.activePhrase.phrase.includes(button.textContent)) {
                button.className = 'wrong';
                this.removeLife();
            } else {
                button.className = 'chosen';
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin()
                if(this.checkForWin()) {
                    this.gameOver(true) 
                }
               
            } 
           
        }
     /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
        gameOver(gameWon) {
            const screenOverlay = document.getElementById("overlay");
            let gameOverMessage = document.getElementById('game-over-message');
            screenOverlay.style.display = "";
            //Check if game has been won using boolean value
            if(gameWon) {
                screenOverlay.className = 'win';
               gameOverMessage.innerHTML = `Great job, you've correctly figured out the phrase!`;
            } else {
                screenOverlay.className = 'lose';
                gameOverMessage.innerHTML = `Bummer, you didn't correctly figure out the phrase. Give it another shot!`;
            }
            this.resetGame();
        }
    /**
     * Resets the game, returning UI to refreshed state. 
     */
        resetGame() {
            const phrase = document.getElementById('phrase');
            const resetHearts = document.querySelectorAll('.tries img');
            const keyboard = document.getElementById('qwerty');
            const button = qwerty.getElementsByTagName('button');
            //Removes previous ul
            phrase.querySelector('ul').innerHTML = '';
            //Resets missed property to zero
            this.missed = 0;
            //Removes class names from previous game
            for (let i = 0; i < button.length; i++) {
              button[i].disabled = false;
              button[i].classList.remove('chosen', 'wrong');
            }
            //Resets hearts from previous game
            for (let i = 0; i < resetHearts.length; i++) {
              resetHearts[i].src = 'images/liveHeart.png';
            }
            this.missed = 0;
          }
        }



    
        