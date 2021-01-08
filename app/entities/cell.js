'use strict';

/**
 * Array with the neighbours cells of one cell
 * @param {Number} x row position of the cell on the board
 * @param {Number} y coll position of the cell on the board
 */
const neighboursCells = (x, y) => [
  [x - 1, y - 1],
  [x, y - 1],
  [x - 1, y],
  [x + 1, y],
  [x, y + 1],
  [x + 1, y + 1],
  [x - 1, y + 1],
  [x + 1, y - 1],
];

/**
 * Count the neighbours of a cell on board[x][y]
 * @param {Number} x row position of the cell on the board
 * @param {Number} y coll position of the cell on the board
 * @param {Array<Array>} board board with the cells
 * @returns {Number} count neighbours number
 */
function countLiveNeighbours(x, y, board) {
  const liveNeighbours = neighboursCells(x, y).reduce((acc, [posX, posY]) => {
    if (board[posX] && board[posX][posY]) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return liveNeighbours;
}

/**
 * Get the next state of a cell on board[x][y]
 * @param {Number} x row position of the cell on the board
 * @param {Number} y coll position of the cell on the board
 * @param {Array<Array>} board board with the cells
 * @returns {Boolean} new state of the cell
 */
function nextState(x, y, board) {
  const liveNeighbours = countLiveNeighbours(x, y, board);
  if (board[x][y]) {
    if (liveNeighbours < 2) {
      return false;
    }
    if (liveNeighbours === 2 || liveNeighbours === 3) {
      return true;
    }
    if (liveNeighbours > 3) {
      return false;
    }
  } else if (liveNeighbours === 3) {
    return true;
  }

  return false;
}

module.exports = {
  countLiveNeighbours,
  nextState,
};
