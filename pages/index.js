import styles from '../styles/Home.module.css'
import { Loading } from '../containers'

export default function Home() {
  return (
    <div className={styles.container}>
      <Loading />
    </div>
  )
}
