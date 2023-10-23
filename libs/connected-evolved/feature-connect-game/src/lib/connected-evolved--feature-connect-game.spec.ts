import { ConnectGame } from './connected-evolved--feature-connect-game';

import { NEW_BOARD } from './constants';

describe('ConnectGame', () => {
  it('given nothing, should return a fresh board', () => {
    expect(ConnectGame()).toEqual(NEW_BOARD);
  });

});
