import { combineReducers, configureStore } from "@reduxjs/toolkit";

import minesweeperSlice from './minesweeperStore';

const rootReducer = combineReducers({
  minesweeperSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});