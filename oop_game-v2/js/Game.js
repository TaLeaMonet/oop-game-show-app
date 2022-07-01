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
                console.log('Incorrect Guess');
                button.className = 'wrong';
                this.removeLife();
            } else {
                console.log('Correct Guess');
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
            screenOverlay.style.display = "";
            if(this.checkForWin === true) {
                screenOverlay.textContent = `Great job, you've correctly figured out the phrase!`;
                screenOverlay.className = 'win';
            } else {
                screenOverlay.textContent = `Bummer, you didn't correctly figure out the phrase. Give it another shot!`;
                screenOverlay.className = 'lose';
            }
        }
}

    
        