/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;  
const startButton = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key');

//Event Listener for start button
startButton.addEventListener("click", () => {
    game = new Game()
    game.startGame();
});

//Event listener for keyboard
function buttonClicked() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", (e) => {
            const button = e.target;
            game.handleInteraction(button);
        })
    };
}
buttonClicked();




