import Img from 'next/image';
import { useEffect, useRef, useState, forwardRef } from 'react';
import { LEVEL_MAPS } from "./constants";
import { gameState, goToNextState } from "../../game/gameStateMachine";
import { Objective } from '../../components'

const GameScreen = () => {

  // const imgRef = useRef(null);
  // const [imgRect, setImgRect] = useState(null);

  useEffect(() => {
    // if (imgRef.current) {
    //   setImgRect(imgRef.current.getBoundingClientRect());
    // }
  }, []);

  const handleLevelClear = () => {
      goToNextState(gameState);
  }
  
  const renderObjective = () => {
    // console.log(imgRect);
    return <Objective onClick={handleLevelClear} />
  }
  
  return (
    <div>
      {renderObjective()}
      <Img
        priority
        // ref={imgRef}
        src={LEVEL_MAPS[gameState.stage]}
        width={document.body.offsetWidth}
        height={document.body.offsetHeight}
      />
    </div>
  )
}

export default GameScreen;
