'use strict';

const Joi = require('@hapi/joi');
const config = require('../config/game-of-life-config');

const boardSchema = Joi.array().items(
  Joi.array().items(
    Joi.boolean()
  ),
);

/**
 * Validate if the board is an array of arrays and the values
 * are booleans.
 * @param {Array<Array>} board board with the cells
 * @throws {Validation error}
 */
async function isArrayOfArrayBooleans(board) {
  try {
    await Joi.validate(board, boardSchema);
  } catch (error) {
    throw new Error(config.arrayError);
  }
}

/**
 * Validate if the board is orthogonal
 * @param {Array<Array>} board board with the cells
 * @throws {Validation error}
 */
function isOrthogonal(board) {
  const boardRows = board.length;
  const results = board.map(row => row.length === boardRows);
  const orthogonal = results.every(result => result === true);

  if (!orthogonal) {
    throw new Error(config.orthogonalError);
  }
}


module.exports = {
  isArrayOfArrayBooleans,
  isOrthogonal,
};
