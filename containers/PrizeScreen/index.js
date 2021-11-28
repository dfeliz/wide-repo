import { useEffect, useState } from 'react';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import styles from '../../styles/Prize.module.css';
import hammer from '../../images/hammer.png';
import prize from '../../images/prize.jpeg';
import { Button } from '../../components';
import Img from 'next/image';

const PrizeScreen = () => {
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [hammerClasses, setHammerClasses] = useState("hammer");
  const [prizeClasses, setPrizeClasses] = useState("prize");

  useEffect(() => {
    if (isButtonPressed) {
      setHammerClasses("hammer rotated");

      setTimeout(() => {
        setPrizeClasses("prize smacked");
        setTimeout(() => {
          setShowConfetti(true);
        }, 1000);
      }, 200);
    }
  }, [isButtonPressed])

  const handleButtonPress = () => {
    setButtonPressed(true);
  }

  return (
    <div className="inline" style={{ top: 0, width: '100vw', height: '100vh' }}>
      {
        showConfetti && (<ConfettiExplosion />)
      }

      <div style={{ position: 'absolute', top: '15vh', left: '30vw', width: 400 }}>
        <div className={`${hammerClasses}`} style={{ zIndex: 20 }}>
          <Img
            src={hammer}
          />
        </div>
        <div className={`${prizeClasses}`} style={{ left: 300, width: 300 }}>
          <Img
            src={prize}
          />
        </div>
      </div>
      {
        !isButtonPressed && (
          <Button style={{ position: 'absolute', bottom: '5vh', left: 0, right: 0, margin: 'auto' }} onClick={handleButtonPress}>
            Get your prize!
          </Button>
        )
      }
    </div>
  )
}

export default PrizeScreen;
