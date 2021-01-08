'use strict';

const createGameOfLife = require('./app/game-of-life');

const board = [
  [true, false, true],
  [false, true, false],
  [true, false, false],
];

function printGen(gameBoard) {
  gameBoard.forEach((row) => {
    console.log(row);
  });
  console.log('------------------------');
}

async function play() {
  const game = await createGameOfLife(board);
  printGen(game.board);
  game.nextGen();
  printGen(game.board);
  game.nextGen();
  printGen(game.board);
  game.nextGen();
  printGen(game.board);
  game.nextGen();
  printGen(game.board);
}

play();
