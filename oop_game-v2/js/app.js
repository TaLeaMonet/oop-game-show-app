/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;  
const startButton = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key');
console.log(keys);

startButton.addEventListener("click", () => {
    game = new Game()
    game.startGame();
});





