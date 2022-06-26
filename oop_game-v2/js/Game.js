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
            const startScreenOverlay = document.getElementById("overlay");
            startScreenOverlay.style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
            return this.activePhrase.addPhraseToDisplay();
            
        }
    }
