import Img from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LEVEL_MAPS } from "./constants";
import { Objective } from '../../components'
import { getRandomPositionOfArea } from './helpers';
import { gameState, goToNextState } from "../../game/gameStateMachine";
import styles from '../../styles/Game.module.css';

const GameScreen = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const handleImageLoaded = () => {
    setImageLoaded(true);
  }

  const handleLevelClear = () => {
    goToNextState(gameState);
    setImageLoaded(false);
  }
  
  const renderObjective = () => {
    if (imageLoaded) {
      return (
        <Objective
          onClick={handleLevelClear}
          position={objectivePosition}
        />
      )
    };
  }
  
  return (
    <div>
      {renderObjective()}
      <div ref={imgRef} className={styles.level}>
        <Img
          onLoadingComplete={handleImageLoaded}
          priority
          src={LEVEL_MAPS[gameState.stage]}
          width={document.body.offsetWidth}
        />
      </div>
    </div>
  )
}

export default GameScreen;
