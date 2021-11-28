import Img from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LEVEL_MAPS } from "./constants";
import { Objective } from '../../components'
import { getRandomPositionOfArea } from './helpers';
import { gameState, goToNextState } from "../../game/gameStateMachine";

const GameScreen = () => {
  const [objectivePosition, setObjectivePosition] = useState({ x: 0, y: 0 });
  const [imgRect, setImgRect] = useState(null);
  
  const imgRef = useRef(null);

  useEffect(() => {
    console.log("[GameScreen]: Updating level rect...");
    const img = imgRef.current;
    if (img) {
      setImgRect(img.getBoundingClientRect());
    }
  }, [gameState.stage, imgRef]);

  useEffect(() => {
    console.log("[GameScreen]: Updating objective position...")
    if (imgRect) {
      setObjectivePosition(getRandomPositionOfArea(imgRect));
    }
  }, [imgRect]);

  const handleLevelClear = () => {
    goToNextState(gameState);
  }
  
  const renderObjective = () => {
    return (
      <Objective
        onClick={handleLevelClear}
        position={objectivePosition}
      />
    )
  }
  
  return (
    <div>
      {renderObjective()}
      <div ref={imgRef}>
        <Img
          priority
          src={LEVEL_MAPS[gameState.stage]}
          width={document.body.offsetWidth}
          // height={document.body.offsetHeight}
        />
      </div>
    </div>
  )
}

export default GameScreen;
