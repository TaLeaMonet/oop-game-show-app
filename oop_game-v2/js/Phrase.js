/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
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
    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true; 
        } else {
            return false; 
        }
    }
    //Fix to remove 'hide' className for 'show' className.
    showMatchedLetter(letter) {
        const matchedLetters = document.getElementsByClassName("hide letter");
        for(let i = 0; i < matchedLetters.length; i++) {
            if(letter === matchedLetters[i].textContent){
                matchedLetters[i].classList.add("show")
            }
        }
    }
}
