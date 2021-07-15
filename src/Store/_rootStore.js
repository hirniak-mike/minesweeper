import { makeAutoObservable } from 'mobx';

import { minesweeperStore } from './minesweeperStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  };

  minesweeperStore = minesweeperStore;

};

export const rootStore = new RootStore();