import { Board } from './types';
import { buildCells } from './util/buildCells';

export const COLUMN_COUNT = 8;
export const ROW_COUNT = 7;
export const NEW_BOARD: Board = {
  currentPlayer: 1,
  cells: buildCells(COLUMN_COUNT, ROW_COUNT),
};
