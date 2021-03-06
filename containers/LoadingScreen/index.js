import { useEffect, useState } from 'react';
import LoadingBar from './Loader';
import { Button } from '../../components'
import FunFact from '../../components/FunFact';
import { funFacts } from '../../game/constants';

const LoadingScreen = ({
  onNextClick,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [funFactMessage, setFunFactMessage] = useState("");

  useEffect(() => {
    loadFakely();
  }, [percentage]);

  const loadFakely = () => {
    if (percentage < 100) {
      setTimeout(() => {
        setPercentage(percentage + 5);
      }, 120);
    }
  }

  const handleLoaded = () => {
    setTimeout(() => {
      setStartButtonVisible(true)
    }, 500);
  }

  const handleStartClick = () => {
    onNextClick();
  }

  const handleFunFactClick = () => {
    setFunFactMessage(getRandomFunFact());
  }

  return (
    <div className="centered loaderContainer">
      <h1 style={{ marginBottom: 3 }}>Greetings, Jairo.</h1>
      <p style={{ marginTop: 0, marginBottom: 0 }}>We were waiting for you! Wilmor is lost and he needs your help</p>
      <br></br>
      <span>Instructions:</span>
      <ul>
        <li>Find Wilmor a few times and you'll get a prize.</li>
        <li>You have a limited time of 5 minutes to complete the game.</li>
        <li>You MUST enjoy it.</li>
      </ul>
      <br></br><br></br><br></br>
      {
        startButtonVisible
        ? <Button onClick={handleStartClick}>Empezar</Button>
        : <LoadingBar percentage={percentage} onLoaded={handleLoaded} />
      }
      <div>
        <FunFact message={funFactMessage} />
      </div>
    </div>
  )
};


export default LoadingScreen;
