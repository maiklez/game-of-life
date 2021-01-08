'use strict';

const config = {
  arrayError: 'Validation error - board no array of arrays or values no booleans',
  orthogonalError: 'Validation error - board no orthogonal',
  boardDefault: [
    [true, false, true],
    [false, true, false],
    [true, false, false],
  ],
};

module.exports = config;
