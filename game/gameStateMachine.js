import { useState } from 'react';
import { STATES } from './constants';
import { gameInitialState } from './model';

export let gameState = {};
let setGameState = () => {};

export const useGameState = () => {
  console.log("[Game state machine]: Initialized");
  [gameState, setGameState] = useState(gameInitialState);
}

export const goToNextState = (actualGameState) => {  
  let nextGameState = { stage: null, points: 0 };
  
  switch (actualGameState.stage) {
    case STATES.START:
      // nextGameState.stage = STATES.STAGE1;
      nextGameState.stage = STATES.PRIZE;
      nextGameState.points = 500;
      break;
    case STATES.STAGE1:
      nextGameState.stage = STATES.STAGE2;
      nextGameState.points = 100;
      break;
    case STATES.STAGE2:
      if (actualGameState.points === 100) {
        nextGameState.stage = STATES.STAGE3;
        nextGameState.points = 200;
        break;
      }
    case STATES.STAGE3:
      if (actualGameState.points === 200) {
        nextGameState.stage = STATES.STAGE4;
        nextGameState.points = 300;
        break;
      }
    case STATES.STAGE4:
      if (actualGameState.points === 300) {
        nextGameState.stage = STATES.STAGE5;
        nextGameState.points = 400;
        break;
      }
    case STATES.STAGE5:
      if (actualGameState.points === 400) {
        nextGameState.stage = STATES.PRIZE;
        nextGameState.points = 500;
        break;
      }
    case STATES.PRIZE:
      break;
    default:
      throw new Error(`Invalid game state. ${actualGameState}`);
  }

  setGameState(nextGameState);
  return nextGameState;
}
