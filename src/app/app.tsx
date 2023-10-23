import { useState } from 'react';
import { ConnectGame } from '../../libs/connected-evolved/feature-connect-game/src/lib/connected-evolved--feature-connect-game';
import GameGrid from './components/GameGrid/GameGrid';

export function App() {

  const [board, setBoard] = useState(ConnectGame())
  const handleCellClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement
    const cellId: number = parseInt(target.id.split('-')[1])
    const newBoard = ConnectGame(board, board.cells[cellId])
    setBoard({...newBoard})
  }

  return (
    <>
    
      <GameGrid cells={board.cells} columnCount={8} handleCellClick={handleCellClick} />
    </>
  );
}

export default App;
