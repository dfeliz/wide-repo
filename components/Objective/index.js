import Img from 'next/image';
import styles from '../../styles/Objective.module.css'
import objectiveImage from '../../images/objective.png';

const Objective = ({
  onClick,
  position,
}) => {

  return (
    <div
      onClick={onClick}
      className={styles.objectiveContainer}
      style={{ position: 'absolute', top: position.y, left: position.x, zIndex: 1000 }}
    >
      <Img
        width={20}
        height={30}
        alt="objective"
        src={objectiveImage}
      />
    </div>
  )
}

export default Objective;
