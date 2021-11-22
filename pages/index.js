import styles from '../styles/Home.module.css';
import { gameState, goToNextState } from '../game/gameStateMachine';
import { STATES } from '../game/constants';
import { Loading, Prize, Game } from '../containers';

export default function Home() {
  // update ui using a counter... maybe?
  //   only if updating the imported state doesn't update the ui,
  //   which is highly probable

  const handleNextStage = () => {
    console.log("[Home]: Old state: ", gameState);
    console.log("[Home]: Moving to next stage...");
    const newState = goToNextState(gameState);
    console.log("[Home]: 🚀 | handleNextStage | newState", newState)
  }

  const renderStage = () => {
    switch (gameState.stage) {
      case STATES.START:
        return <Loading onNextClick={handleNextStage} />
      case STATES.STAGE1
        || STATES.STAGE2
        || STATES.STAGE3
        || STATES.STAGE4
        || STATES.STAGE5:
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
