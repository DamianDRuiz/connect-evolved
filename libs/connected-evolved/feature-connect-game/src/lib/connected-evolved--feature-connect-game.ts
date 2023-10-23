import { Action, Board } from "./types";
import { buildCells } from "./util/buildCells";

export function ConnectGame(board?: Board, action?: Action ): Board  {
  if(typeof board == "undefined")
    board = newBoard(8, 7)

  return board;
}

function newBoard(columns: number, rows: number): Board {
  return {currentPlayer: 1, cells: buildCells(columns, rows)}
}