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

function enoughInARow(
  cells: Cell[],
  direction: Direction,
  amountToWin: number,
  currentPlayer: Player
): boolean {
  if (cells.length < AMOUNT_TO_WIN) return false;

  let inARowCount = 0;
  switch (direction) {
    case 'horizontal':
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].owner == currentPlayer) {
          inARowCount++;
          console.log(inARowCount);
          if (inARowCount == amountToWin) break;
        } else inARowCount = 0;
      }
      break;
  }
  if (inARowCount >= amountToWin) return true;
  return false;
}
