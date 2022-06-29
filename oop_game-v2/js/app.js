/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;  
const startButton = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key');

startButton.addEventListener("click", () => {
    game = new Game()
    game.startGame();
});

for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", () => {
        const button = keys[i];
        game.handleInteraction(button);
    })
};

//Not sure if my logic is correct for this forEach method, but it doesn't work!
// keys.forEach(key => {
//     key.addEventListener("click", () => {
//         console.log(key);
//     })
// });




