/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
            this.missed = 0; 
            this.phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("A picture is worth a thousand words"), 
            new Phrase("Absence makes the heart grow fonder"), 
            new Phrase("God bless the child that has his own"), 
            new Phrase("Love like there is no tomorrow")
            ];
            this.activePhrase = null; 
        }
        getRandomPhrase() {
            const randomPhrase = Math.floor(Math.random() * this.phrases.length);
            return this.phrases[randomPhrase]; 
        }
        startGame(phrase) {
            let startScreenOverlay = document.getElementById("overlay");
            startScreenOverlay.style.display = "none";
            this.activePhrase = this.getRandomPhrase();
            return this.activePhrase.addPhraseToDisplay();
            
        }
        checkForWin(letter) {
            let phraseLetters = document.querySelectorAll(".hidden");
            console.log(phraseLetters);
            if(phraseLetters.length === 0) {
                return true; 
            } else {
                return false; 
            }
        }
        removeLife() {
            const heartsLeft = document.querySelectorAll('img');
            console.log(heartsLeft);
            if(this.missed < 4) {
                heartsLeft[this.missed].src = 'images/lostHeart.png';
                this.missed += 1
            } else {
                this.gameOver();
            }

        }
        handleInteraction(button) {
            console.log(button);
            button.disabled = true;
            if(!this.activePhrase.phrase.includes(button.textContent)) {
                button.className = 'wrong';
                this.removeLife();
            } else {
                button.className = 'chosen';
                this.activePhrase.showMatchedLetter();
                this.checkForWin()
                if(this.checkForWin === true) {
                    this.gameOver();
                }

            } 
        }
        //Conditional jumps to 'else' condition when test argument is true.
        gameOver() {
            const screenOverlay = document.getElementById("overlay");
            if(this.checkForWin === true) {
                screenOverlay.style.display = "";
                screenOverlay.className = 'win';
                document.getElementById('game-over-message').innerHTML = `Great job, you've correctly figured out the phrase!`;
            } else {
                screenOverlay.style.display = "";
                screenOverlay.className = 'lose';
                document.getElementById('game-over-message').innerHTML = `Bummer, you didn't correctly figure out the phrase. Give it another shot!`;
            }
        }
}

    
        