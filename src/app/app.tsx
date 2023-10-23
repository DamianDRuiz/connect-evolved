// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { connectedEvolvedFeatureConnectGame as Game } from '@connect-evolved/connected-evolved//feature-connect-game'
export function App() {
  Game
  return (
    <>
      <NxWelcome title="connect-evolved" />

      <div />
    </>
  );
}

export default App;
