/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
 /**
 * Display phrase on game board
 */
    addPhraseToDisplay() {
        const phraseArr = this.phrase.split("");
        const phrase_ul = document.querySelector("ul");
        for(let i = 0; i < phraseArr.length; i++) {
            if(phraseArr[i] === " "){
                const space_li = document.createElement("li");
                space_li.className = "space";
                phrase_ul.append(space_li);
            } else {   
                const letter_li = document.createElement("li");
                letter_li.className = "hide letter";
                letter_li.textContent = `${phraseArr[i]}`;
                phrase_ul.append(letter_li);
            }
        }
        return phrase_ul; 
    }
 /**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */   
    checkLetter(letter) {
        //Checks if the phrase includes the letter entered
        if(this.phrase.includes(letter)) {
            return true; 
        } else {
            return false; 
        }
    }
/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */    
    showMatchedLetter(letter) {
        const matchedLetters = document.getElementsByClassName("hide letter");
        for(let i = 0; i < matchedLetters.length; i++) {
            //Check if the letter entered matches textContnt of letters in phrase
            if(letter === matchedLetters[i].textContent){
                matchedLetters[i].classList.add("show")
            }
        }
    }
}
