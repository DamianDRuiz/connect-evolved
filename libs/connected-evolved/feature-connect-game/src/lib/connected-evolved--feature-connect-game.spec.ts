import { ConnectGame } from './connected-evolved--feature-connect-game';

import { COLUMN_COUNT, NEW_BOARD, ROW_COUNT } from './constants';
import { Board } from './types';
import { buildCells } from './util/buildCells';

describe('Initializing', () => {
  it('given nothing, should return a fresh board', () => {
    expect(ConnectGame()).toEqual(NEW_BOARD);
  });

  it('given a board, with no action, should return the board', () => {
    expect(ConnectGame(NEW_BOARD)).toEqual(NEW_BOARD);
  });
});

describe('Cell clicking', () => {
  it('given a board and action, should place a piece at the lowest empty cell', () => {
    let subject: Board = { ...NEW_BOARD };
    const testedClickedCell = { x: 8, y: 1, ticked: false, owner: null };
    const result: Board = {
      currentPlayer: 1,
      cells: buildCells(COLUMN_COUNT, ROW_COUNT),
    };

    result.cells[55].ticked = true;
    result.cells[55].owner = 1;
    subject = ConnectGame(subject, testedClickedCell);
    expect(subject.cells).toEqual(result.cells); // Clicked cell column is empty

    result.cells[47].ticked = true;
    result.cells[47].owner = 2;
    subject = ConnectGame(subject, testedClickedCell);
    expect(subject.cells).toEqual(result.cells); // Clicked cell column is not empty
  });
});
