import { makeAutoObservable } from 'mobx';

import { createInitialCells } from '../Utils/minesweeperHelper';

export class MinesweeperStore {
  constructor() {
    makeAutoObservable(this);
  };

  numOfCells = 36;
  numOfBomb = 10;
  fieldWidth = 6;

  arrOfCells = [...createInitialCells(this.numOfCells, this.numOfBomb, this.fieldWidth)];

};

export const minesweeperStore = new MinesweeperStore();