import styles from '../../styles/Button.module.css'

const Button = ({
  onClick,
  children,
}) => {
  return (
    <div className={styles.cButtonContainer}>
      <div
        className={styles.cButton}
        onClick={onClick}>
        {children}
      </div>
    </div>
  )
}

export default Button;
