'use strict';

const config = require('../app/config/game-of-life-config');
const createGameOfLife = require('../app/game-of-life');

const BOARD_DAFAULT = config.boardDefault;
const BOARD_BAD_1 = [true];
const BOARD_BAD_2 = [[true, false], [false, 1]];
const BOARD_BAD_3 = [[true, false], [false]];

const BOARD_1_GEN = [
  [false, true, false],
  [true, true, false],
  [false, false, false],
];

const BOARD_2_GEN = [
  [true, true, false],
  [true, true, false],
  [false, false, false],
];

describe('[game-of-life-tests]', () => {
  describe('Create game', () => {
    it('it should create a game of life with board default', async () => {
      const game = await createGameOfLife();
      expect(game.board).toEqual(BOARD_DAFAULT);
    });
    it('it should create a game of life with passing board', async () => {
      const game = await createGameOfLife(BOARD_DAFAULT);
      expect(game.board).toEqual(BOARD_DAFAULT);
    });
    it('it should fail create a game of life - bad board', async () => {
      await expect(createGameOfLife(BOARD_BAD_1)).rejects.toMatchObject(
        Error(config.arrayError)
      );
    });
    it('it should fail create a game of life - bad board 2', async () => {
      await expect(createGameOfLife(BOARD_BAD_2)).rejects.toMatchObject(
        Error(config.arrayError)
      );
    });
    it('it should fail create a game of life - board no orthogonal', async () => {
      await expect(createGameOfLife(BOARD_BAD_3)).rejects.toMatchObject(
        Error(config.orthogonalError)
      );
    });
    it('it should get next generation', async () => {
      const game = await createGameOfLife();
      expect(game.board).toEqual(BOARD_DAFAULT);
    });
  });
  describe('Next Gen', () => {
    it('it should get first generation', async () => {
      const game = await createGameOfLife();
      game.nextGen();
      expect(game.board).toEqual(BOARD_1_GEN);
    });
    it('it should get second generation', async () => {
      const game = await createGameOfLife();
      game.nextGen();
      game.nextGen();
      expect(game.board).toEqual(BOARD_2_GEN);
    });
    it('it should get third generation', async () => {
      const game = await createGameOfLife();
      game.nextGen();
      game.nextGen();
      game.nextGen();
      expect(game.board).toEqual(BOARD_2_GEN);
    });
  });
});
