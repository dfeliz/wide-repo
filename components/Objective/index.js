import Img from 'next/image';
import styles from '../../styles/Objective.module.css'
import objectiveImage from '../../images/objective.png';

const Objective = ({
  onClick,
}) => {

  return (
    <div className={styles.objectiveContainer} onClick={onClick}>
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
