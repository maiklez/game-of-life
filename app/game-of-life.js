'use strict';

const config = require('./config/game-of-life-config');
const { cellEntity, boardEntity } = require('./entities');

/**
 * Class that implements the game of life
 */
class GameOfLife {
  constructor(board) {
    this.board = board;
  }

  /**
   * Pass to next generation the cells of the board
   */
  nextGen() {
    const newBoard = this.board.map((row, x) => {
      const newRow = row.map((c, y) => {
        const newCell = cellEntity.nextState(x, y, this.board);

        return newCell;
      });

      return newRow;
    });

    this.board = newBoard;
  }
}

/**
 * Create a Game of Life.
 * Set default board is no board passed
 * @param {Array<Array<Boolean>>} board board with the cells[][]
 * @returns {GameOfLife} new game of life with board validated
 */
async function createGameOfLife(board = config.boardDefault) {
  await boardEntity.isArrayOfArrayBooleans(board);
  boardEntity.isOrthogonal(board);

  return new GameOfLife(board);
}

module.exports = createGameOfLife;
