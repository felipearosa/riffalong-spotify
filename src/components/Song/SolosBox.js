import SolosButtons from './SolosButtons';
import styles from './SolosBox.module.css';
import SolosTable from './SolosTable';

const SolosBox = ({time}) => {
  return (
    <div className={styles.box}>
      <h3>Loop</h3>
      <SolosButtons />
      <SolosTable time={time} />
    </div>
  )
}

export default SolosBox
