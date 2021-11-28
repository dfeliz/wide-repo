import styles from '../../styles/Button.module.css'

const Button = ({
  style,
  onClick,
  children,
}) => {
  return (
    <div className={styles.cButtonContainer} style={style}>
      <div
        className={styles.cButton}
        onClick={onClick}>
        {children}
      </div>
    </div>
  )
}

export default Button;
