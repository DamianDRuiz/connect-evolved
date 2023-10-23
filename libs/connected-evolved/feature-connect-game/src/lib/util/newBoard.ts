import { Board } from "../types";
import { buildCells } from "./buildCells";

export function newBoard(columns: number, rows: number): Board {
  return { currentPlayer: 1, cells: buildCells(columns, rows) };
}
