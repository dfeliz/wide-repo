import styles from '../styles/Home.module.css';
import { gameState, goToNextState } from '../game/gameStateMachine';
import { STATES } from '../game/constants';
import { Loading, Prize, Game } from '../containers';

export default function Home() {
  console.log("🚀 | current game state: ", gameState)

  // update ui using a counter... maybe?
  //   only if updating the imported state doesn't update the ui,
  //   which is highly probable

  const handleNextStage = () => {
    goToNextState(gameState);
  }

  const renderStage = () => {
    switch (gameState.stage) {
      case STATES.START:
        return <Loading onNextClick={handleNextStage} />
      case STATES.STAGE1:
      case STATES.STAGE2:
      case STATES.STAGE3:
      case STATES.STAGE4:
      case STATES.STAGE5:
        return <Game onNextClick={handleNextStage} />
      case STATES.PRIZE:
        return <Prize onNextClick={handleNextStage} />
      default:
        throw new Error(`Unknown stage: "${gameState.stage}"`);
    }
  }

  return (
    <div className={styles.container}>
      {renderStage()}
    </div>
  )
}
