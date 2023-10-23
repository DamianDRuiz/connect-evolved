import { Cell } from "../types"

export function buildCells(columns: number, rows: number) {
  const total = columns * rows
  const cells: Cell[] = []

  let xIndex = 1
  let yIndex = 1

  for (let i = 0; i < total; i++) {
    const newCell: Cell = {
      x: xIndex,
      y: yIndex,
      ticked: false,
      owner: null,
    }

    cells.push(newCell)

    xIndex++

    if (xIndex > columns) {
      xIndex = 1
      yIndex++
    }
  }

  return cells
}