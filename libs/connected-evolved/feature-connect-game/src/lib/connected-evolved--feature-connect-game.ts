import { Action, Board } from "./types";
import { buildCells } from "./util/buildCells";
import { newBoard } from "./util/newBoard";

export function ConnectGame(board?: Board, action?: Action ): Board  {
  if(typeof board == "undefined")
    board = newBoard(8, 7)

  return board;
}
