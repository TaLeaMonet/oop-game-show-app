/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
  };
  const game = new Game();
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());