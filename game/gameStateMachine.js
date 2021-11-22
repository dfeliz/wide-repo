import { useState } from 'react';
import { gameInitialState } from './model';
import { STATES } from './constants';

let gameState = {};
let setGameState = () => {};

export const useGameState = () => {
  console.log("[Game state machine]: Initialized");
  [gameState, setGameState] = useState(gameInitialState);
}

export const getGameState = () => {
  return gameState;
}

export const goToNextState = (actualGameState) => {
  const { stage, points, found } = actualGameState;

  let nextGameState = { stage: STATES.START, points: 0, found: false };

  switch (stage) {
    case STATES.START:
      nextGameState.stage = STATES.STAGE1;
      return nextGameState;
    case STATES.STAGE1:
      if (found === true) {
        nextGameState.stage = STATES.STAGE2;
        nextGameState.points = 100;
        nextGameState.found = false;
        break;
      }
    case STATES.STAGE2:
      if (found === true && points === 100) {
        nextGameState.stage = STATES.STAGE3;
        nextGameState.points = 200;
        nextGameState.found = false;
        break;
      }
    case STATES.STAGE3:
      if (found === true && points === 200) {
        nextGameState.stage = STATES.STAGE4;
        nextGameState.points = 300;
        nextGameState.found = false;
        break;
      }
    case STATES.STAGE4:
      if (found === true && points === 300) {
        nextGameState.stage = STATES.STAGE5;
        nextGameState.points = 400;
        nextGameState.found = false;
        break;
      }
    case STATES.STAGE5:
      if (found === true && points === 400) {
        nextGameState.stage = STATES.PRIZE;
        nextGameState.points = 500;
        nextGameState.found = false;
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
