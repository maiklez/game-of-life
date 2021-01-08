'use strict';

const { boardDefault } = require('../../app/config/game-of-life-config');
const { cellEntity } = require('../../app/entities');

describe('[cell]', () => {
  describe('Count live neighbours', () => {
    it('it should count live neighbours 0,0 position', () => {
      const liveNeighbours = cellEntity.countLiveNeighbours(0, 0, boardDefault);
      expect(liveNeighbours).toEqual(1);
    });
    it('it should count live neighbours 1,1 position', () => {
      const liveNeighbours = cellEntity.countLiveNeighbours(1, 1, boardDefault);
      expect(liveNeighbours).toEqual(3);
    });
    it('it should count live neighbours 2,2 position', () => {
      const liveNeighbours = cellEntity.countLiveNeighbours(2, 2, boardDefault);
      expect(liveNeighbours).toEqual(1);
    });
    it('it should count live neighbours 1,0 position', () => {
      const liveNeighbours = cellEntity.countLiveNeighbours(1, 0, boardDefault);
      expect(liveNeighbours).toEqual(3);
    });
    it('it should count live neighbours 1,2 position', () => {
      const liveNeighbours = cellEntity.countLiveNeighbours(1, 2, boardDefault);
      expect(liveNeighbours).toEqual(2);
    });
  });
  describe('Next State', () => {
    it('it should get next state of live cell 1 neighbour', async () => {
      const nextState = cellEntity.nextState(0, 0, boardDefault);
      expect(nextState).toBe(false);
    });
    it('it should get next state of live cell 2 neighbours', async () => {
      const nextState = cellEntity.nextState(1, 1, [
        [true, true],
        [true, false],
      ]);
      expect(nextState).toBe(true);
    });
    it('it should get next state of live cell 3 neighbours', async () => {
      const nextState = cellEntity.nextState(1, 1, boardDefault);
      expect(nextState).toBe(true);
    });
    it('it should get next state of live cell 4 neighbours', async () => {
      const nextState = cellEntity.nextState(1, 1, [
        [true, false, true],
        [false, true, false],
        [true, false, true],
      ]);
      expect(nextState).toBe(false);
    });
    it('it should get next state of death cell 3 neighbours', async () => {
      const nextState = cellEntity.nextState(0, 1, boardDefault);
      expect(nextState).toBe(true);
    });
    it('it should get next state of death cell 2 neighbours', async () => {
      const nextState = cellEntity.nextState(1, 2, boardDefault);
      expect(nextState).toBe(false);
    });
  });
});
