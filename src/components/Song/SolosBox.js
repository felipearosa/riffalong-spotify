import SolosButtons from './SolosButtons';
import styles from './SolosBox.module.css';
import SolosTable from './SolosTable';

const SolosBox = () => {
  return (
    <div className={styles.box}>
      <h3>Loop</h3>
      <SolosButtons />
      <SolosTable />
    </div>
  )
}

export default SolosBox
