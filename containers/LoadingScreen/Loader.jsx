import { useState, useEffect } from 'react';
import Img from 'next/image';
import styles from '../../styles/Loader.module.css';
import LoadingBackground from '../../images/loading-background.jpeg';

const Loader = ({
  percentage,
  onLoaded,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const loadingBarWidth = document.body.offsetWidth * 0.65;
    setWidth(loadingBarWidth);
  }, []);

  if (percentage === 100) {
    onLoaded();
  }

  return (
    <>
      <h3>Loading...</h3>
      <div
        style={{ width }}
        className={styles.loadingBar}
      >
        <Img
          priority
          height={"54px"}
          src={LoadingBackground}
          alt="loading background img"
          width={percentage * width / 100}
          className={styles.innerLoadingBar}
        />
      </div>
    </>
  )
}

export default Loader;
