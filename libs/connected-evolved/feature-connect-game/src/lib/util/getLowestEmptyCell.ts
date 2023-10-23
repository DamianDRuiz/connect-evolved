import { Board, Cell } from "../types";

export function getLowestEmptyCell(
  clickedCell: Cell,
  board: Board
): Cell {
  const clickedColumn = clickedCell.x;
  const cellsInColumn = board.cells.filter((cell) => cell.x == clickedColumn);
  const initialIndex = cellsInColumn.length - 1;

  for (let i = initialIndex; i > -1; i--) {
    const currentCell = cellsInColumn[i];
    if (!currentCell.ticked) return currentCell;
  }

  return clickedCell;
}
