export interface Board {
  currentPlayer: Player;
  cells: Cell[];
}

export interface Cell {
  x: number;
  y: number;
  ticked: boolean;
  owner: Player | null;
}

export type Player = 1 | 2;

export type Action = Cell;
