import '../styles/globals.css'
import { useGameState } from '../game/gameStateMachine';

function MyApp({ Component, pageProps }) {
  useGameState();
  return <Component {...pageProps} />
}

export default MyApp
