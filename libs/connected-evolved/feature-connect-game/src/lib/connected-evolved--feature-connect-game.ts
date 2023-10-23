import { AMOUNT_TO_WIN } from './constants';
import { Action, Board, Cell, Direction, Player } from './types';
import { getLowestEmptyCell } from './util/getLowestEmptyCell';
import { newBoard } from './util/newBoard';

export function ConnectGame(board?: Board, action?: Action): Board {
  if (typeof board == 'undefined') return newBoard(8, 7);
  if (typeof action == 'undefined') return board;
  if (action.ticked) return board;

  const updatedCell: Cell = board.cells.find(
    (cell) => cell == getLowestEmptyCell(action, board)
  ) as Cell;
  updatedCell.ticked = true;
  updatedCell.owner = board.currentPlayer;

  board.currentPlayer = board.currentPlayer == 1 ? 2 : 1;

  return board;
}
